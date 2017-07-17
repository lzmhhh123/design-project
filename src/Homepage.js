import React, { Component } from 'react'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'

export default class extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
      { this.props.about === 0 ? null : <About /> }
      { this.props.portfolio === 0 ? null : <Portfolio /> }
      { this.props.contact === 0 ? null : <Contact /> }
      </div>
    )
  }
}
