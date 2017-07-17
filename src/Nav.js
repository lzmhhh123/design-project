import React, { Component } from 'react'
import MenuIcon from './MenuIcon'
import Radium from 'radium'
import {fadeIn} from 'react-animations'
import { Animation } from 'styled-animation'
import {IconMenu, MenuItem, IconButton} from 'material-ui'
import TweenOne from 'rc-tween-one'
import {Motion, spring} from 'react-motion'

export default class  extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    setTimeout(() => {
      let logo = document.getElementsByClassName("logo")
      console.log(logo)
      logo[0].style.marginTop = "35px"
      let logoLine = document.getElementsByClassName("logoLine")
      logoLine[0].style.width = "135px"
      let aboutLogo = document.getElementsByClassName("aboutLogo")
      aboutLogo[0].style.marginRight = "50px"
      let portfolioLogo = document.getElementsByClassName("portfolioLogo")
      portfolioLogo[0].style.marginRight = "50px"
      let contactLogo = document.getElementsByClassName("contactLogo")
      contactLogo[0].style.marginRight = "50px"
      let aboutLine = document.getElementsByClassName("aboutLine")
      aboutLine[0].style.width = "68px"
    }, 0)
  }

  componentWillReceiveProps(nextProps) {
    setTimeout(() => {
      let aboutLine = document.getElementsByClassName("aboutLine")
      let portfolioLine = document.getElementsByClassName("portfolioLine")
      let contactLine = document.getElementsByClassName("contactLine")
      aboutLine[0].style.transitionDelay = '0s'
      aboutLine[0].style.width = (nextProps.about === 1 ? '68px' : '0px')
      portfolioLine[0].style.width = (nextProps.portfolio === 1 ? '110px' : '0px')
      contactLine[0].style.width = (nextProps.contact === 1 ? '93px' : '0px')
    }, 0)
  }

  render() {
    return (
      <div>
        <div style={{float: 'left'}}>
          <div style={
              {
                transition: "all 0.5s linear",
                transitionDelay: "0.5s",
                backgroundColor: 'orange',
                marginTop: '40px',
                width: '0px',
                height: "15px",
                marginLeft: "50px",
                position: "absolute"
              }} className="logoLine"/>
          <img src="/image/logo_desktop.png" className="logo" style={{
            transition: "all 0.5s linear",
            marginTop: "-35px",
            marginLeft: "50px",
            opacity: "0.9",
            position: "absolute"
          }}/>
        </div>
        <div style={{float: 'right'}}>
          <div style={{
            marginTop: '45px',
            marginRight: '-130px',
            float: 'right',
            positon: 'absolute',
            transition: "all 0.5s linear",
            transitionDelay: '1s'
          }} className="contactLogo" onClick={this.props.clickContact}>
            <img src="/image/button_contact_desktop.png" />
            <div style={{
              height: '15px',
              width: '0px',
              backgroundColor: 'orange',
              transition: "all 0.3s linear",
              marginTop: '-20px'
            }} className="contactLine" />
          </div>
        </div>
        <div style={{float: 'right'}}>
          <div style={{
            marginTop: '45px',
            marginRight: '-130px',
            float: 'right',
            positon: 'absolute',
            transition: "all 0.5s linear",
            transitionDelay: '1s'
          }} className="portfolioLogo" onClick={this.props.clickPortfolio}>
            <img src="/image/button_portfolio_desktop.png" />
            <div style={{
              height: '15px',
              width: '0px',
              backgroundColor: 'orange',
              transition: "all 0.3s linear",
              marginTop: '-20px'
            }} className="portfolioLine" />
          </div>
        </div>
        <div style={{float: 'right'}}>
          <div style={{
            marginTop: '45px',
            marginRight: '-130px',
            float: 'right',
            positon: 'absolute',
            transition: "all 0.5s linear",
            transitionDelay: '1s'
          }} className="aboutLogo" onClick={this.props.clickAbout}>
            <img src="/image/button_about_desktop.png" />
            <div style={{
              height: '15px',
              width: '0px',
              backgroundColor: 'orange',
              transition: "all 0.3s linear",
              marginTop: '-20px',
              transitionDelay: '1.5s'
            }} className="aboutLine" />
          </div>
        </div>
      </div>
    )
  }
}
/*

<Animation name="fadeInRightBig" duration="3s">
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
</Animation>

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
