import React, { Component } from 'react'
import MenuIcon from './MenuIcon'

export default class extends Component {
  constructor() {
    super()
    this.state = {
      menuIconStatus: 2
    }
    this.menuClick = this.menuClick.bind(this)
  }

  menuClick(event) {
    event.preventDefault()
    let s = this.state.menuIconStatus
    this.setState({
      menuIconStatus: s == 2 ? 0 : (s ^ 1)
    })
  }

  render() {
    console.log(this.state.menuIconStatus)
    return (
      <div onClick={this.menuClick}>
        <MenuIcon Status={this.state.menuIconStatus} />
      </div>
    )
  }
}
