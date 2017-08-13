import React, { Component } from 'react'
import reactDOM from 'react-dom'
import axios from 'axios'
import {Form, Alert, FormField, FormInput, Button, Card} from 'elemental'
import FileUpload from 'react-fileupload'
import DropzoneComponent from 'react-dropzone-component'

export default class extends Component {
  constructor() {
    super()
    this.state = {
      isLogin: false,
      errorMessage: null
    }
    this.login = this.login.bind(this);
    this.changePassword = this.changePassword.bind(this);
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
  render() {
    this.djsConfig = {
        addRemoveLinks: true,
        acceptedFiles: "application/pdf"
    };
    this.componentConfig1 = {
        iconFiletypes: ['.pdf'],
        showFiletypeIcon: true,
        postUrl: '/api/uploadHandler1'
    };
    this.componentConfig2 = {
        iconFiletypes: ['.pdf'],
        showFiletypeIcon: true,
        postUrl: '/api/uploadHandler2'
    };
    this.componentConfig3 = {
        iconFiletypes: ['.pdf'],
        showFiletypeIcon: true,
        postUrl: '/api/uploadHandler3'
    };
    this.componentConfig4 = {
        iconFiletypes: ['.pdf'],
        showFiletypeIcon: true,
        postUrl: '/api/uploadHandler4'
    };
    this.componentConfig5 = {
        iconFiletypes: ['.pdf'],
        showFiletypeIcon: true,
        postUrl: '/api/uploadHandler5'
    };
    this.componentConfig6 = {
        iconFiletypes: ['.pdf'],
        showFiletypeIcon: true,
        postUrl: '/api/uploadHandler6'
    };
    this.componentConfig7 = {
        iconFiletypes: ['.pdf'],
        showFiletypeIcon: true,
        postUrl: '/api/uploadHandler7'
    };
    this.componentConfig8 = {
        iconFiletypes: ['.pdf'],
        showFiletypeIcon: true,
        postUrl: '/api/uploadHandler8'
    };
    this.componentConfig9 = {
        iconFiletypes: ['.pdf'],
        showFiletypeIcon: true,
        postUrl: '/api/uploadHandler9'
    };
    this.callbackArray = [() => console.log('Hi!'), () => console.log('Ho!')];
    this.callback = () => console.log('Hello!');
    this.success = file => console.log('uploaded', file);
    this.removedfile = file => console.log('removing...', file);
    this.dropzone = null;
    const config1 = this.componentConfig1;
    const config2 = this.componentConfig2;
    const config3 = this.componentConfig3;
    const config4 = this.componentConfig4;
    const config5 = this.componentConfig5;
    const config6 = this.componentConfig6;
    const config7 = this.componentConfig7;
    const config8 = this.componentConfig8;
    const config9 = this.componentConfig9;
    const djsConfig = this.djsConfig;

    // For a list of all possible events (there are many), see README.md!
    const eventHandlers = {
        init: dz => {this.dropzone = dz; console.log('haha');},
        drop: this.callbackArray,
        addedfile: this.callback,
        success: this.success,
        removedfile: this.removedfile
    }
    return <div style={{margin: '200px auto', width: 400}}>
    {
      this.state.isLogin ?
      (
        <div>
          <Card>
          <strong><h2 style={{color: 'red'}}>这里可以修改admin的口令</h2></strong>
            <Form onSubmit={this.changePassword}>
              {
                this.state.errorMessage && this.state.errorMessage !== 'change successful!'
                  ? <Alert type="danger"><strong>Error:</strong> {this.state.errorMessage}</Alert>
                  : null
              }
              {
                this.state.errorMessage === 'change successful!' ?
                <Alert type="danger"><strong> {this.state.errorMessage}</strong></Alert>
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
          <strong><h2 style={{color: 'red'}}>请上传文件名page.pdf的文件：</h2></strong>
          <DropzoneComponent config={config1} eventHandlers={eventHandlers} djsConfig={djsConfig} />
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
