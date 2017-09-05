import React, { Component } from 'react'
import reactDOM from 'react-dom'
import axios from 'axios'
import {Form, Alert, FormField, FormInput, Button, Card} from 'elemental'
import {Menu, Layout} from 'antd'
import FileUpload from 'react-fileupload'
import DropzoneComponent from 'react-dropzone-component'

export default class extends Component {
  constructor() {
    super()
    this.state = {
      isLogin: false,
      errorMessage: null,
      selectLable: '1',
      labelMessage: null
    }
    this.login = this.login.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeLabel = this.changeLabel.bind(this);
  }
  login(event) {
    event.preventDefault()
    let password = reactDOM.findDOMNode(this.refs.pwd).value
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
          this.setState({
            isLogin: false,
            errorMessage: res.data.message
          })
        }
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
      this.setState({
        errorMessage: '两次输入密码不一致！'
      })
      return;
    }
    axios
      .post('/api/changePassword', {password, confirmPassword, oldPassword})
      .then((res) => {
        if(res.data.message === '') {
          this.setState({
            errorMessage: null
          })
        }
        else {
          this.setState({
            errorMessage: res.data.message
          })
        }
      })
  }
  changeLabel(event) {
    event.preventDefault()
    let label = reactDOM.findDOMNode(this.refs.label).value
    axios
      .post('/api/changeLabel', {number: this.state.selectLable, label})
      .then((res) => {
        if(res.data.message === '') {
          this.setState({
            labelMessage: 'change label successful!'
          })
        }
        else {
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
        acceptedFiles: "application/pdf"
    };
    this.componentConfig = {
        iconFiletypes: ['.pdf'],
        showFiletypeIcon: true,
        postUrl: '/api/uploadHandler'
    };
    this.djsConfigImage = {
        addRemoveLinks: true,
        acceptedFiles: "image/png,image/jpg"
    };
    this.componentConfigImage = {
        iconFiletypes: ['.png', '.jpg'],
        showFiletypeIcon: true,
        postUrl: '/api/uploadHandler1'
    };
    this.callbackArray = [() => console.log('Hi!'), () => console.log('Ho!')];
    this.callback = () => console.log('Hello!');
    this.success = file => console.log('uploaded', file);
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
        removedfile: this.removedfile
    }
    return <div style={{margin: '200px auto', width: 800, textAlign: 'center'}}>
    {
      this.state.isLogin ?
      (
        <div>
          <Card>
            <strong><h2 style={{color: 'black'}}>这里可以修改admin的口令</h2></strong>
            <Form onSubmit={this.changePassword}>
              {
                this.state.errorMessage && this.state.errorMessage !== 'change successful!'
                  ? <Alert type="danger"><strong>Error:</strong> {this.state.errorMessage}</Alert>
                  : null
              }
              {
                this.state.errorMessage === 'change successful!' ?
                <Alert type="success"><strong> {this.state.errorMessage}</strong></Alert>
                : null
              }
              <FormField label="新密码:" htmlFor="form-input-password">
                <FormInput type="password" placeholder="password" name="password" ref="password" />
              </FormField>
              <FormField label="确认新密码:" htmlFor="form-input-confirmPassword">
                <FormInput type="password" placeholder="confirm password" name="confirmPassword" ref="confirmPassword" />
              </FormField>
              <FormField label="旧密码:" htmlFor="form-input-oldPassword">
                <FormInput type="password" placeholder="old password" name="oldPassword" ref="oldPassword" />
              </FormField>
              <Button submit>submit</Button>
            </Form>
          </Card>
          <Layout style={{marginTop: 50}}>
            <Layout.Sider style={{width: 200}}>
              <Menu defaultSelectedKeys={['1']} onClick={(item) => this.setState({selectLable: item.key})}>
                <Menu.Item key='1'>label one</Menu.Item>
                <Menu.Item key='2'>label two</Menu.Item>
                <Menu.Item key='3'>label three</Menu.Item>
                <Menu.Item key='4'>label four</Menu.Item>
                <Menu.Item key='5'>label five</Menu.Item>
                <Menu.Item key='6'>label six</Menu.Item>
                <Menu.Item key='7'>label seven</Menu.Item>
                <Menu.Item key='8'>label eight</Menu.Item>
                <Menu.Item key='9'>label nine</Menu.Item>
              </Menu>
            </Layout.Sider>
            <Layout.Content>
              <strong><h2 style={{color: 'black'}}>{`请上传文件名为page${this.state.selectLable}.pdf的文件：`}</h2></strong>
              <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
              <div style={{height: 30}} />
              <strong><h2 style={{color: 'black'}}>{`请上传文件名为image${this.state.selectLable}.${this.check() ? 'png' : 'jpg'}的文件：`}</h2></strong>
              <DropzoneComponent config={configImage} eventHandlers={eventHandlers} djsConfig={djsConfigImage} />
              <div style={{height: 30}} />
              <strong><h2 style={{color: 'black'}}>{`这里可以修改标签${this.state.selectLable}：`}</h2></strong>
              <Form onSubmit={this.changeLabel}>
                {
                  this.state.labelMessage && this.state.labelMessage !== 'change label successful!'
                    ? <Alert type="danger"><strong>Error:</strong> {this.state.labelMessage}</Alert>
                    : null
                }
                {
                  this.state.labelMessage === 'change label successful!' ?
                  <Alert type="success"><strong> {this.state.labelMessage}</strong></Alert>
                  : null
                }
                <FormField label={`标签${this.state.selectLable}的新内容`} htmlFor="form-input-label">
                  <FormInput type="string" placeholder={`label${this.state.selectLable}`} name="label" ref="label" />
                </FormField>
                <Button submit>点击修改标签名</Button>
              </Form>
            </Layout.Content>
          </Layout>
        </div>
      ) : (
        <Card>
          <Form onSubmit={this.login}>
            {
              this.state.errorMessage
                ? <Alert type="danger"><strong>Error:</strong> {this.state.errorMessage}</Alert>
                : null
            }
            <FormField label="password:" htmlFor="form-input-password">
              <FormInput type="password" placeholder="password" name="password" ref="pwd" />
            </FormField>
            <Button submit>login</Button>
          </Form>
        </Card>
      )
    }
    </div>
  }
}
