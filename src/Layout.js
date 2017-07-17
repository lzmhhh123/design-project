import React, { Component } from 'react'
import Nav from './Nav'

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
  }

  clickPortfolio(event) {
    event.preventDefault()
    this.setState({
      about: 0,
      portfolio: 1,
      contact: 0
    })
  }

  clickContact(event) {
    event.preventDefault()
    this.setState({
      about: 0,
      portfolio: 0,
      contact: 1
    })
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, {
        about: this.state.about,
        portfolio: this.state.portfolio,
        contact: this.state.contact
      }));
    return (
      <div>
        <Nav
          clickAbout={this.clickAbout}
          clickPortfolio={this.clickPortfolio}
          clickContact={this.clickContact}
          about={this.state.about}
          portfolio={this.state.portfolio}
          contact={this.state.contact}
        />
        <div>{this.props.children}</div>
      </div>
    )
  }
}
