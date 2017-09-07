import React, { Component } from 'react'
import Nav from './Nav'
import {browserHistory} from 'react-router'
import {Header} from 'react-fullpage'

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

  componentDidMount() {
    setTimeout(() => {
      let about = 0, portfolio = 0, contact = 0, home = 0;
      if (window.location.pathname === '/') home = 1;
      if (window.location.pathname === '/about') about = 1;
      if (window.location.pathname === '/contact') contact = 1;
      if (window.location.pathname === '/portfolio') portfolio = 1;
      this.setState({about, home, portfolio, contact});
    }, 0)
  }

  clickAbout(event) {
    event.preventDefault()
    this.setState({
      about: 1,
      portfolio: 0,
      contact: 0,
      home: 0
    })
    setTimeout(() => {browserHistory.push('/about#section1')}, 300)
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
    let color = (navigator.userAgent.toLowerCase().indexOf('macintosh') !== -1 ? '#F4F4F4' : '#F2F2F2')
    return (
      <div style={{backgroundColor: color}}>
        <Header>
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
        </Header>
        <div style={{margin: 'auto', height: '100%'}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
