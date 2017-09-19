import React, { Component } from 'react'
import reactDOM from 'react-dom'
import axios from 'axios'
import { Card, Select, Alert, Form, Icon, Input, Button, Checkbox, Avatar, message } from 'antd'
import {Menu, Layout, Tabs} from 'antd'
import FileUpload from 'react-fileupload'
import DropzoneComponent from 'react-dropzone-component'
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const Option = Select.Option;



export default class extends Component {
  constructor() {
    super()
    this.state = {
      isLogin: false,
      errorMessage: null,
      selectLable: '1',
      labelMessage: null,
      current: 'password'
    }
    this.login = this.login.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeLabel = this.changeLabel.bind(this);
  }
  login(event) {
    event.preventDefault()
    let password = this.refs.pwd.refs.input.value
    axios
      .post('/api/login', { password })
      .then((res) => {
        console.log(res.data);
        if(res.data.message === '') {
          this.setState({
            isLogin: true,
            errorMessage: null
          })
        } else {
          message.error(res.data.message)
          this.setState({
            isLogin: false,
            errorMessage: res.data.message
          })
        }
      })
      .catch(function (error) {
        message.error('操作失败')
      })
  }
  check() {
    let n = this.state.selectLable
    if(n === '1' || n === '3' || n === '5' || n === '6' || n === '8') return true;
    return false;
  }
  changePassword(event) {
    event.preventDefault()
    let password = reactDOM.findDOMNode(this.refs.password).value;
    let confirmPassword = reactDOM.findDOMNode(this.refs.confirmPassword).value;
    let oldPassword = reactDOM.findDOMNode(this.refs.oldPassword).value;

    if(password !== confirmPassword) {
      message.warning('两次密码输入不一致！')
      return;
    }
    if(!password){
      message.warning('密码不能为空！')
      return;
    }
    axios
      .post('/api/changePassword', {password, confirmPassword, oldPassword})
      .then((res) => {
        if(res.data.message === 'change successful!') {
          message.success('密码修改成功')
          reactDOM.findDOMNode(this.refs.password).value = ""
          reactDOM.findDOMNode(this.refs.confirmPassword).value = ""
          reactDOM.findDOMNode(this.refs.oldPassword).value = ""
        }
        else {
          message.error(res.data.message)
          this.setState({
            errorMessage: res.data.message
          })
        }
      })
      .catch(function (error) {
        message.error('操作失败')
      })
  }
  changeLabel(event) {
    event.preventDefault()
    let label = reactDOM.findDOMNode(this.refs.label).value
    console.log(label)
    if (!label) {
      message.warning('标签不能为空');
      return
    }
    axios
      .post('/api/changeLabel', {number: this.state.selectLable, label})
      .then((res) => {
        if(res.data.message === '') {
          message.success('标签名修改成功');
          reactDOM.findDOMNode(this.refs.label).value = ""
          this.setState({
            labelMessage: 'change label successful!'
          })
        }
        else {
          message.error(res.data.message);
          this.setState({
            labelMessage: res.data.message
          })
        }
      })
  }
  render() {
    console.log(this.state.selectLable);
    this.djsConfig = {
        addRemoveLinks: true,
        acceptedFiles: "image/jpeg"
    };
    this.componentConfig = {
        iconFiletypes: ['.jpg'],
        showFiletypeIcon: true,
        postUrl: '/api/uploadHandler'
    };
    this.djsConfigImage = {
        addRemoveLinks: true,
        acceptedFiles: "image/png"
    };
    this.componentConfigImage = {
        iconFiletypes: ['.png'],
        showFiletypeIcon: true,
        postUrl: '/api/uploadHandlerimage'
    };
    this.callbackArray = [() => console.log('Hi!'), () => console.log('Ho!')];
    this.callback = () => console.log('Hello!');
    this.success = file => message.success('文件' + file.name + '上传成功，修改已经生效，可以进入Portfolio页查看');
    this.fail = file => message.error('上传失败，请remove file后重试');
    this.removedfile = file => console.log('removing...', file);
    this.dropzone = null;
    const config = this.componentConfig;
    const djsConfig = this.djsConfig;
    const configImage = this.componentConfigImage;
    const djsConfigImage = this.djsConfigImage;
    // For a list of all possible events (there are many), see README.md!
    const eventHandlers = {
        init: dz => {this.dropzone = dz; console.log('haha');},
        drop: this.callbackArray,
        addedfile: this.callback,
        success: this.success,
        error: this.fail,
        removedfile: this.removedfile
    }
    return <div style={{position:'absolute', left: 0, right: 0,margin: 'auto', paddingTop: 100, height: '100%',width: '90%', textAlign: 'center'}}>
    {
      this.state.isLogin ?
      (
        <Card style={{padding: 50, margin: 0, width:'100%', height:'100%'}}>
          <Tabs defaultActiveKey="1" tabPosition="left">
          <TabPane tab={<span><Icon type="key" />Admin密码修改</span>} key="1">
            <Form onSubmit={this.changePassword}>
              <div style={{marginLeft:50, marginRight:50}}>
                <FormItem label="" htmlFor="form-input-oldPassword">
                  <Input type="password" placeholder="旧密码" name="oldPassword" ref="oldPassword" />
                </FormItem>
                <FormItem label="" htmlFor="form-input-password">
                  <Input type="password" placeholder="新密码" name="password" ref="password" />
                </FormItem>
                <FormItem label="" htmlFor="form-input-confirmPassword">
                  <Input type="password" placeholder="确认新密码" name="confirmPassword" ref="confirmPassword" />
                </FormItem>
              </div>
              <Button type="primary"  htmlType="submit">提交</Button>
            </Form>
          </TabPane>
          <TabPane tab={<span><Icon type="file" />详情长图上传</span>} key="2">
            <Alert
              message=""
              description="请先修改文件名为pagex.jpg，再上传。（如修改第1个标签对应的长图，则修改为page1.jpg，第4个标签的则为page4.jpg）"
              type="info"
              showIcon
              style={{marginBottom:20}}
            />
            <Alert
              message=""
              description="上传同一文件名的文件，会替换原来上传的文件。"
              type="info"
              showIcon
              style={{marginBottom:20}}
            />
            <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />

          </TabPane>
          <TabPane tab={<span><Icon type="picture" />Portfolio预览图修改</span>} key="3">
            <Alert
              message=""
              description="请先修改文件名为imagex.png，再上传。（如修改第1个标签对应的长图，则修改为image1.png，第4个标签的则为image4.png）"
              type="info"
              showIcon
              style={{marginBottom:20}}
            />
            <Alert
              message=""
              description="上传同一文件名的文件，会替换原来上传的文件。"
              type="info"
              showIcon
              style={{marginBottom:20}}
            />
            <Alert
              message=""
              description="为了展示透明效果，请上传png格式的图片。"
              type="info"
              showIcon
              style={{marginBottom:20}}
            />
            <DropzoneComponent config={configImage} eventHandlers={eventHandlers} djsConfig={djsConfigImage} />
          </TabPane>

          <TabPane tab={<span><Icon type="edit" />Portfolio标签名修改</span>} key="4">

            <Alert
              message=""
              description="请先选择想要修改的标签编号，再填入标签的新内容"
              type="info"
              showIcon
              style={{marginBottom:20}}
            />
            <Form onSubmit={this.changeLabel}>
              <FormItem htmlFor="form-input-label">
                <Select style={{marginBottom:20}} defaultValue="1" onChange={(item) => this.setState({selectLable: item})}>
                  <Option value="1">标签1</Option>
                  <Option value="2">标签2</Option>
                  <Option value="3">标签3</Option>
                  <Option value="4">标签4</Option>
                  <Option value="5">标签5</Option>
                  <Option value="6">标签6</Option>
                  <Option value="7">标签7</Option>
                  <Option value="8">标签8</Option>
                  <Option value="9">标签9</Option>
                </Select>

                <Input placeholder={`标签${this.state.selectLable}的新内容`} type="string" name="label" ref="label" />
              </FormItem>
              <Button type="primary"  htmlType="submit">提交</Button>
            </Form>
          </TabPane>
        </Tabs>
      </Card>

      ) : (
        <Card style={{ borderRadius: 2, marginTop: '10vh', width: '30vw', display:'inline-block', padding: 50}}>
          <Avatar shape="square" size="large" icon="user"/>
          <p style={{fontSize:16, fontFamily:'sans_serif',marginTop: 10, marginBottom: 100}}> Admin </p>
          <Form onSubmit={this.login}>
            <FormItem>
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" ref="pwd" placeholder="Password" />
            </FormItem>
            <Button style={{width:'100%'}} type="primary" htmlType="submit" className="login-form-button">
               <Icon type="user" style={{ fontSize: 13 }} />Log in
            </Button>
          </Form>
        </Card>
      )
    }
    </div>
  }
}
