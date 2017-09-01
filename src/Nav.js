import React, { Component } from 'react'
import {fadeIn} from 'react-animations'
import { Animation } from 'styled-animation'

export default class  extends Component {
  constructor() {
    super()
    this.mouseLeaveLogo = this.mouseLeaveLogo.bind(this)
    this.mouseLeaveAbout = this.mouseLeaveAbout.bind(this)
    this.mouseLeaveContact = this.mouseLeaveContact.bind(this)
    this.mouseLeavePortfolio = this.mouseLeavePortfolio.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      let logoImage = document.getElementsByClassName("logoImage")
      logoImage[0].style.transform = "rotate(0deg)"
      let logo = document.getElementsByClassName("logo")
      for(let i = 0; i < 4; ++i) {
        logo[i].style.marginTop = "30px"
      }
      let logoLine = document.getElementsByClassName("logoLine")
      logoLine[0].style.width = '147px'
      let aboutLogo = document.getElementsByClassName("aboutLogo")
      aboutLogo[0].style.marginRight = "136px"
      let portfolioLogo = document.getElementsByClassName("portfolioLogo")
      portfolioLogo[0].style.marginRight = "173px"
      let contactLogo = document.getElementsByClassName("contactLogo")
      contactLogo[0].style.marginRight = "154px"
    }, 0)
  }

  componentWillReceiveProps(nextProps) {
    setTimeout(() => {
      let logoLine = document.getElementsByClassName("logoLine")
      let aboutLine = document.getElementsByClassName("aboutLine")
      let portfolioLine = document.getElementsByClassName("portfolioLine")
      let contactLine = document.getElementsByClassName("contactLine")
      logoLine[0].style.transitionDelay = '0s'
      let logo = document.getElementsByClassName("logo")
      for(let i = 0; i < logo.length; ++i) {
        logo[i].style.transition = "all 0s ease"
        logo[i].style.transitionDelay = '0s'
      }
      for(let i = 0; i < logo.length; ++i) {
        logo[i].style.marginTop = "30px"
      }
      logoLine[0].style.width = (nextProps.home === 1 ? '147px' : '0px')
      aboutLine[0].style.width = (nextProps.about === 1 ? '78px' : '0px')
      portfolioLine[0].style.width = (nextProps.portfolio === 1 ? '118px' : '0px')
      contactLine[0].style.width = (nextProps.contact === 1 ? '110px' : '0px')
      let aboutLogo = document.getElementsByClassName("aboutLogo")
      aboutLogo[0].style.transition = "all 0s ease"
      aboutLogo[0].style.transitionDelay = '0s'
      aboutLogo[0].style.marginRight = "136px"
      let portfolioLogo = document.getElementsByClassName("portfolioLogo")
      portfolioLogo[0].style.transition = "all 0s ease"
      portfolioLogo[0].style.transitionDelay = '0s'
      portfolioLogo[0].style.marginRight = "173px"
      let contactLogo = document.getElementsByClassName("contactLogo")
      contactLogo[0].style.transition = "all 0s ease"
      contactLogo[0].style.transitionDelay = '0s'
      contactLogo[0].style.marginRight = "154px"
    }, 0)
  }

  mouseOverLogo() {
    setTimeout(() => {
      let logoLine = document.getElementsByClassName("logoLine")
      logoLine[0].style.width = '147px'
    })
  }

  mouseLeaveLogo(event) {
    event.preventDefault()
    setTimeout(() => {
      let logoLine = document.getElementsByClassName("logoLine")
      if(this.props.home === 0) logoLine[0].style.width = '0px'
    })
  }

  mouseOverAbout() {
    setTimeout(() => {
      let aboutLine = document.getElementsByClassName("aboutLine")
      aboutLine[0].style.width = '78px'
    })
  }

  mouseLeaveAbout(event) {
    event.preventDefault()
    setTimeout(() => {
      let aboutLine = document.getElementsByClassName("aboutLine")
      if(this.props.about === 0) aboutLine[0].style.width = '0px'
    })
  }

  mouseOverPortfolio() {
    setTimeout(() => {
      let portfolioLine = document.getElementsByClassName("portfolioLine")
      portfolioLine[0].style.width = '118px'
    })
  }

  mouseLeavePortfolio(event) {
    event.preventDefault()
    setTimeout(() => {
      let portfolioLine = document.getElementsByClassName("portfolioLine")
      if(this.props.portfolio === 0) portfolioLine[0].style.width = '0px'
    })
  }

  mouseOverContact() {
    setTimeout(() => {
      let contactLine = document.getElementsByClassName("contactLine")
      contactLine[0].style.width = '110px'
    })
  }

  mouseLeaveContact(event) {
    event.preventDefault()
    setTimeout(() => {
      let contactLine = document.getElementsByClassName("contactLine")
      if(this.props.contact === 0) contactLine[0].style.width = '0px'
    })
  }

  render() {
    return (
      <div>
        <div style={{float: 'left'}} onClick={this.props.clickHome} onMouseOver={this.mouseOverLogo} onMouseOut={this.mouseLeaveLogo}>
          <div style={
              {
                transition: "all 0.2s linear",
                transitionDelay: "1.3s",
                backgroundColor: '#FFE300',
                marginTop: '34px',
                width: '0px',
                height: "16px",
                marginLeft: "60px",
                position: "fixed"
              }} className="logoLine"/>

            <img src="/image/logo1.png" className="logoImage" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              marginTop: "30px",
              transform: "rotate(90deg)",
              marginLeft: "66px",
              opacity: "0.9",
              width: 28,
              height: 27,
              position: "fixed"
            }}/>
            <img src="/image/logo2.pic" className="logo" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              transitionDelay: "0.2s",
              marginTop: "-35px",
              marginLeft: "101.5px",
              opacity: "0.9",
              width: 19,
              height: 27,
              position: "fixed"
            }}/>
            <img src="/image/logo3.pic" className="logo" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              transitionDelay: "0.4s",
              marginTop: "-35px",
              marginLeft: "129px",
              opacity: "0.9",
              width: 19,
              height: 27,
              position: "fixed"
            }}/>
            <img src="/image/logo4.png" className="logo" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              transitionDelay: "0.6s",
              marginTop: "-35px",
              marginLeft: "156px",
              opacity: "0.9",
              width: 21,
              height: 27,
              position: "fixed"
            }}/>
            <img src="/image/logo5.png" className="logo" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              transitionDelay: "0.8s",
              marginTop: "-35px",
              marginLeft: "182.6px",
              opacity: "0.9",
              width: 19,
              height: 27,
              position: "fixed"
            }}/>
        </div>
        <div style={{float: 'right'}} onClick={this.props.clickContact} onMouseOver={this.mouseOverContact} onMouseOut={this.mouseLeaveContact}>
          <div style={{
            marginTop: '32px',
            marginRight: '0px',
            float: 'right',
            transition: "all 0.5s linear",
            transitionDelay: '1.5s'
          }} className="contactLogo">
            <div style={{
              height: '16px',
              width: '0px',
              backgroundColor: '#FFE300',
              transition: "all 0.2s linear",
              position: "fixed",
              marginTop: '3.5px'
            }} className="contactLine" />
            <div style={{
              position: "fixed",
              marginLeft: 10,
              width: 94,
              fontSize: 18,
              fontFamily: "PingFangSC-Light"
            }}>
              CONTACT
            </div>
          </div>
        </div>
        <div style={{float: 'right'}} onClick={this.props.clickPortfolio} onMouseOver={this.mouseOverPortfolio} onMouseOut={this.mouseLeavePortfolio}>
          <div style={{
            marginTop: '32px',
            marginRight: '0px',
            float: 'right',
            transition: "all 0.5s linear",
            transitionDelay: '1.5s'
          }} className="portfolioLogo">
            <div style={{
              height: '16px',
              width: '0px',
              backgroundColor: '#FFE300',
              transition: "all 0.2s linear",
              position: "fixed",
              marginTop: '3.5px'
            }} className="portfolioLine" />
            <div style={{
              position: "fixed",
              marginLeft: 10,
              width: 94,
              fontSize: 18,
              fontFamily: "PingFangSC-Light"
            }}>
              PORTFOLIO
            </div>
          </div>
        </div>
        <div style={{float: 'right'}} onClick={this.props.clickAbout} onMouseOver={this.mouseOverAbout} onMouseOut={this.mouseLeaveAbout}>
          <div style={{
            marginTop: '32px',
            marginRight: '0px',
            float: 'right',
            transition: "all 0.5s linear",
            transitionDelay: '1.5s'
          }} className="aboutLogo">
            <div style={{
              height: '16px',
              width: '0px',
              backgroundColor: '#FFE300',
              transition: "all 0.2s linear",
              position: "fixed",
              marginTop: '3.5px',
            }} className="aboutLine" />
            <div style={{
              position: "fixed",
              marginLeft: 10,
              width: 94,
              fontSize: 18,
              fontFamily: "PingFangSC-Light"
            }}>
              ABOUT
            </div>
          </div>
        </div>
      </div>
    )
  }
}
