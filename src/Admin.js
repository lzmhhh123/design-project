import React, { Component } from 'react'
import reactDOM from 'react-dom'
import axios from 'axios'
import {Form, Alert, FormField, FormInput, Button, Card} from 'elemental'

export default class extends Component {
  constructor() {
    super()
    this.state = {
      isLogin: false,
      errorMessage: null
    }
  }
  login(event) {
    event.preventDefault()
    let password = reactDOM.findDOMNode(this.refs.pwd).value
    axios
      .post('/login', { password })
      .then((res) => {
        if(res.data.message === '') {
          this.setState({
            isLogin: true
          })
        } else {
          this.setState({
            errorMessage: res.data.message
          })
        }
      })
  }
  render() {
    return <div style={{margin: '200px auto', width: 400}}>
    {
      this.state.isLogin ?
      (
        <div>
          
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
