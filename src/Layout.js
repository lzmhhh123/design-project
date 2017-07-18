import React, { Component } from 'react'
import Nav from './Nav'
import {browserHistory} from 'react-router'

export default class extends Component {
  constructor() {
    super()
    this.state = {
      about: 1,
      portfolio: 0,
      contact: 0
    }
    this.clickAbout = this.clickAbout.bind(this)
    this.clickPortfolio = this.clickPortfolio.bind(this)
    this.clickContact = this.clickContact.bind(this)
  }

  clickAbout(event) {
    event.preventDefault()
    this.setState({
      about: 1,
      portfolio: 0,
      contact: 0
    })
    console.log('haa');
    browserHistory.push('')
  }

  clickPortfolio(event) {
    event.preventDefault()
    this.setState({
      about: 0,
      portfolio: 1,
      contact: 0
    })
    browserHistory.push('/portfolio')
  }

  clickContact(event) {
    event.preventDefault()
    this.setState({
      about: 0,
      portfolio: 0,
      contact: 1
    })
    browserHistory.push('/contact')
  }

  render() {
    return (
      <div>
        <div style={{height: '80px'}}>
          <Nav
            clickAbout={this.clickAbout}
            clickPortfolio={this.clickPortfolio}
            clickContact={this.clickContact}
            about={this.state.about}
            portfolio={this.state.portfolio}
            contact={this.state.contact}
          />
        </div>
        <div>{this.props.children}</div>
      </div>
    )
  }
}
