import React, { Component } from 'react'
import MenuIcon from './MenuIcon'
import Radium from 'radium'
import {fadeIn} from 'react-animations'
import { Animation } from 'styled-animation';
import {IconMenu, MenuItem, IconButton} from 'material-ui';

export default class extends Component {
  constructor() {
    super()
    this.state = {
      menuIconStatus: 0
    }
    this.menuClick = this.menuClick.bind(this)
  }

  menuClick(event) {
    event.preventDefault()
    let s = this.state.menuIconStatus
    this.setState({
      menuIconStatus: s ^ 1
    })
  }

  render() {
    return (
      <div>
        <div style={{float: 'right'}}>
          <Animation name="fadeInDownBig" duration="3s" timing="ease-out">
            <div onClick={this.menuClick}>
              <MenuIcon Status={this.state.menuIconStatus} />
            </div>
          </Animation>
        </div>
        {
          this.state.menuIconStatus === 0 ? null :
            <div style={{float: 'right', marginRight: '20px'}}>
              <Animation name="fadeInRight" duration='0.5s' timing="ease-out" style={{float: 'right', marginRight: '20px'}}>
                <p>Menu</p>
              </Animation>
              <Animation name="fadeInRight" duration='0.5s' timing="ease-out" style={{float: 'right', marginRight: '20px'}}>
                <p>Menu1</p>
              </Animation>
              <Animation name="fadeInRight" duration='0.5s' timing="ease-out" style={{float: 'right', marginRight: '20px'}}>
                <p>Menu2</p>
              </Animation>
            </div>
        }
        <div style={{float: 'left'}}>
          <Animation name="fadeInDownBig" duration="1s" timing="ease-out">
            <h2>hello </h2>
          </Animation>
        </div>
        <div style={{float: 'left'}}>
          <Animation name="fadeInDownBig" duration="2s" timing="ease-out">
            <h2>Word</h2>
          </Animation>
        </div>
      </div>
    )
  }
}
