import React, { Component } from 'react'
import Nav from './Nav'
import {browserHistory} from 'react-router'

export default class extends Component {
  constructor() {
    super()
    this.state = {
      about: 0,
      portfolio: 0,
      contact: 0,
      home: 1
    }
    this.clickAbout = this.clickAbout.bind(this)
    this.clickPortfolio = this.clickPortfolio.bind(this)
    this.clickContact = this.clickContact.bind(this)
    this.clickHome = this.clickHome.bind(this)
  }

  clickAbout(event) {
    event.preventDefault()
    console.log('hahahaha');
    this.setState({
      about: 1,
      portfolio: 0,
      contact: 0,
      home: 0
    })
    browserHistory.push('/about')
  }

  clickPortfolio(event) {
    event.preventDefault()
    this.setState({
      about: 0,
      portfolio: 1,
      contact: 0,
      home: 0
    })
    browserHistory.push('/portfolio')
  }

  clickContact(event) {
    event.preventDefault()
    this.setState({
      about: 0,
      portfolio: 0,
      contact: 1,
      home: 0
    })
    browserHistory.push('/contact')
  }

  clickHome(event) {
    event.preventDefault()
    this.setState({
      about: 0,
      portfolio: 0,
      contact: 0,
      home: 1
    })
    browserHistory.push('/')
  }

  render() {
    return (
      <div>
        <div>
          <img src="/image/banner_desktop.png" style={{height: '96px', position: 'fixed', width: '100%'}} />
          <Nav
            clickAbout={this.clickAbout}
            clickPortfolio={this.clickPortfolio}
            clickContact={this.clickContact}
            clickHome={this.clickHome}
            home={this.state.home}
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
