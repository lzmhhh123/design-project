import React, { Component } from 'react'
import Nav from './Nav'

export default class extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Nav />
        <div>{this.props.children}</div>
      </div>
    )
  }
}
