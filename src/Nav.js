import React, { Component } from 'react'
import MenuIcon from './MenuIcon'
import Radium from 'radium'
import {fadeIn} from 'react-animations'
import { Animation } from 'styled-animation';
import {IconMenu, MenuItem, IconButton} from 'material-ui';
import TweenOne from 'rc-tween-one'
import {Motion, spring} from 'react-motion';

export default class  extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div style={{float: 'left'}}>
          <Motion defaultStyle={{x: 0}} style={{x: spring(130, {stiffness: 60, damping: 25})}}>
            {
              value => <div style={
              {
                backgroundColor: 'orange',
                marginTop: '40px',
                width: (value.x) + 'px',
                height: "15px",
                marginLeft: "50px",
                position: "absolute"
              }} />
             }
          </Motion>
          <img src="/image/logo_desktop.png" style={
            {marginTop: "35px",
             marginLeft: "50px",
             opacity: 0.9,
             position: "absolute"
             }}/>
        </div>
        <div style={{float: 'right'}}>
          <div style={{marginTop: '35px', marginRight: '50px', float: 'right'}} onClick={this.props.clickContact}>
            {
              this.props.contact === 0 ? null :
              <Motion defaultStyle={{x: 0}} style={{x: spring(100, {stiffness: 60, damping: 25})}}>
                {
                  value => <div style={
                  {
                    backgroundColor: 'orange',
                    width: (value.x) + 'px',
                    height: "15px",
                    position: "absolute"
                  }} />
                 }
              </Motion>
            }
            <img src="/image/button_contact_desktop.png" style={{opacity: 0.9}}/>
          </div>
          <div style={{marginTop: '35px', marginRight: '50px', float: 'right'}} onClick={this.props.clickPortfolio}>
            {
              this.props.portfolio === 0 ? null :
              <Motion defaultStyle={{x: 0}} style={{x: spring(115, {stiffness: 60, damping: 25})}}>
                {
                  value => <div style={
                  {
                    backgroundColor: 'orange',
                    width: (value.x) + 'px',
                    height: "15px",
                    position: "absolute"
                  }} />
                 }
              </Motion>
            }
            <img src="/image/button_portfolio_desktop.png" style={{opacity: 0.9}}/>
          </div>
          <div style={{marginTop: '35px', marginRight: '50px', float: 'right'}} onClick={this.props.clickAbout}>
            {
              this.props.about === 0 ? null :
              <Motion defaultStyle={{x: 0}} style={{x: spring(70, {stiffness: 60, damping: 25})}}>
                {
                  value => <div style={
                  {
                    backgroundColor: 'orange',
                    width: (value.x) + 'px',
                    height: "15px",
                    position: "absolute"
                  }} />
                 }
              </Motion>
            }
            <img src="/image/button_about_desktop.png" style={{opacity: 0.9}}/>
          </div>
        </div>
      </div>
    )
  }
}
/*
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
*/
