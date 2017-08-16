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
        logo[i].style.marginTop = "56px"
      }
      let logoLine = document.getElementsByClassName("logoLine")
      logoLine[0].style.width = "139px"
      let aboutLogo = document.getElementsByClassName("aboutLogo")
      aboutLogo[0].style.marginRight = "135px"
      let portfolioLogo = document.getElementsByClassName("portfolioLogo")
      portfolioLogo[0].style.marginRight = "144px"
      let contactLogo = document.getElementsByClassName("contactLogo")
      contactLogo[0].style.marginRight = "163px"
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
        logo[i].style.marginTop = "56px"
      }
      logoLine[0].style.width = (nextProps.home === 1 ? '135px' : '0px')
      aboutLine[0].style.width = (nextProps.about === 1 ? '82px' : '0px')
      portfolioLine[0].style.width = (nextProps.portfolio === 1 ? '120px' : '0px')
      contactLine[0].style.width = (nextProps.contact === 1 ? '120px' : '0px')
      let aboutLogo = document.getElementsByClassName("aboutLogo")
      aboutLogo[0].style.transition = "all 0s ease"
      aboutLogo[0].style.transitionDelay = '0s'
      aboutLogo[0].style.marginRight = "135px"
      let portfolioLogo = document.getElementsByClassName("portfolioLogo")
      portfolioLogo[0].style.transition = "all 0s ease"
      portfolioLogo[0].style.transitionDelay = '0s'
      portfolioLogo[0].style.marginRight = "144px"
      let contactLogo = document.getElementsByClassName("contactLogo")
      contactLogo[0].style.transition = "all 0s ease"
      contactLogo[0].style.transitionDelay = '0s'
      contactLogo[0].style.marginRight = "163px"
    }, 0)
  }

  mouseOverLogo() {
    setTimeout(() => {
      let logoLine = document.getElementsByClassName("logoLine")
      logoLine[0].style.width = '135px'
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
      aboutLine[0].style.width = '82px'
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
      portfolioLine[0].style.width = '120px'
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
      contactLine[0].style.width = '120px'
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
                marginTop: '64px',
                width: '0px',
                height: "13px",
                marginLeft: "43px",
                position: "fixed"
              }} className="logoLine"/>
          {
            this.props.about === 0 ? <div>
            <img src="/image/logo1.png" className="logoImage" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              marginTop: "56px",
              transform: "rotate(90deg)",
              marginLeft: "49px",
              opacity: "0.9",
              position: "fixed"
            }}/>
            <img src="/image/logo2.png" className="logo" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              transitionDelay: "0.2s",
              marginTop: "-35px",
              marginLeft: "82.5px",
              opacity: "0.9",
              position: "fixed"
            }}/>
            <img src="/image/logo3.png" className="logo" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              transitionDelay: "0.4s",
              marginTop: "-35px",
              marginLeft: "108px",
              opacity: "0.9",
              position: "fixed"
            }}/>
            <img src="/image/logo4.png" className="logo" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              transitionDelay: "0.6s",
              marginTop: "-35px",
              marginLeft: "133px",
              opacity: "0.9",
              position: "fixed"
            }}/>
            <img src="/image/logo5.png" className="logo" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              transitionDelay: "0.8s",
              marginTop: "-35px",
              marginLeft: "157.6px",
              opacity: "0.9",
              position: "fixed"
            }}/></div> :
            <img src="/image/logowhite.png" style={{
              marginTop: '56px',
              position: 'fixed',
              opacity: 0.9,
              marginLeft: '49px',
              width: '127px',
            }}/>
          }
        </div>
        <div style={{float: 'right'}} onClick={this.props.clickContact} onMouseOver={this.mouseOverContact} onMouseOut={this.mouseLeaveContact}>
          <div style={{
            marginTop: '64px',
            marginRight: '0px',
            float: 'right',
            transition: "all 0.5s linear",
            transitionDelay: '1.5s'
          }} className="contactLogo">
            <div style={{
              height: '13px',
              width: '0px',
              backgroundColor: '#FFE300',
              transition: "all 0.2s linear",
              position: "fixed",
              marginTop: '0px'
            }} className="contactLine" />
            {
              this.props.about === 0 ?
              <img src="/image/button_contact_desktop@2x.png" style={{position: "fixed", opacity: 0.9, marginLeft: 10, width: 94, height: 16}}/> :
              <img src="/image/contact.png" style={{position: "fixed", opacity: 0.9, marginLeft: 10}}/>
            }
          </div>
        </div>
        <div style={{float: 'right'}} onClick={this.props.clickPortfolio} onMouseOver={this.mouseOverPortfolio} onMouseOut={this.mouseLeavePortfolio}>
          <div style={{
            marginTop: '64px',
            marginRight: '0px',
            float: 'right',
            transition: "all 0.5s linear",
            transitionDelay: '1.5s'
          }} className="portfolioLogo">
            <div style={{
              height: '13px',
              width: '0px',
              backgroundColor: '#FFE300',
              transition: "all 0.2s linear",
              position: "fixed",
              marginTop: '0px'
            }} className="portfolioLine" />
            {
              this.props.about === 0 ?
              <img src="/image/button_portfolio_desktop@2x.png" style={{position: "fixed", opacity: 0.9, marginLeft: 5, width: 110, height: 16}}/> :
              <img src="/image/portfolio.png" style={{position: "fixed", opacity: 0.9, marginLeft: 5}}/>
            }
          </div>
        </div>
        <div style={{float: 'right'}} onClick={this.props.clickAbout} onMouseOver={this.mouseOverAbout} onMouseOut={this.mouseLeaveAbout}>
          <div style={{
            marginTop: '64px',
            marginRight: '0px',
            float: 'right',
            transition: "all 0.5s linear",
            transitionDelay: '1.5s'
          }} className="aboutLogo">
            <div style={{
              height: '13px',
              width: '0px',
              backgroundColor: '#FFE300',
              transition: "all 0.2s linear",
              position: "fixed",
              marginTop: '0px',
            }} className="aboutLine" />
            {
              this.props.about === 0 ?
              <img src="/image/button_about_desktop@2x.png" style={{position: "fixed", opacity: 0.9, marginLeft: 6, width: 68, height: 16}}/> :
              <img src="/image/about.png" style={{position: "fixed", opacity: 0.9, marginLeft: 6}}/>
            }
          </div>
        </div>
      </div>
    )
  }
}
