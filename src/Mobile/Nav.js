import React, { Component } from 'react'
import MenuIcon from './MenuIcon'
import {fadeIn} from 'react-animations'
import { Animation } from 'styled-animation'

export default class  extends Component {
  constructor() {
    super()
    this.menuOnClick = this.menuOnClick.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      let logoImage = document.getElementsByClassName("logoImage")
      logoImage[0].style.transform = "rotate(0deg)"
      let logo = document.getElementsByClassName("logo")
      for(let i = 0; i < 4; ++i) {
        logo[i].style.marginTop = "20px"
      }
      let logoLine = document.getElementsByClassName("logoLine")
      logoLine[0].style.width = "139px"
      this.refs.menuIconDiv.style.marginRight = '20px'
    }, 0)
  }

  menuOnClick(event) {
    event.preventDefault()
    let aboutLogo = document.getElementsByClassName("aboutLogo")
    let portfolioLogo = document.getElementsByClassName("portfolioLogo")
    let contactLogo = document.getElementsByClassName("contactLogo")
    let logoAll = document.getElementsByClassName('logoAll')
    if(this.refs.menuIcon.state.s === 0) {
      contactLogo[0].style.marginRight = "90px"
      aboutLogo[0].style.marginRight = "70px"
      portfolioLogo[0].style.marginRight = "100px"
      logoAll[0].style.marginLeft = '-200px'
    }
    else {
      contactLogo[0].style.marginRight = this.props.contact ? "90px" : "-200px"
      aboutLogo[0].style.marginRight = this.props.about ? "70px" : "-200px"
      portfolioLogo[0].style.marginRight = this.props.portfolio ? "100px" : "-200px"
      logoAll[0].style.marginLeft = "0px"
    }
    this.refs.menuIcon.setState({s: this.refs.menuIcon.state.s ^ 1})
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
        logo[i].style.marginTop = "20px"
      }
      logoLine[0].style.width = (nextProps.home === 1 ? '135px' : '0px')
      aboutLine[0].style.width = (nextProps.about === 1 ? '70px' : '0px')
      portfolioLine[0].style.width = (nextProps.portfolio === 1 ? '98px' : '0px')
      contactLine[0].style.width = (nextProps.contact === 1 ? '82px' : '0px')
    }, 0)
  }

  render() {
    return (
      <div>
        <div className="logoAll" onClick={this.props.clickHome}
          style={{
            float: 'left',
            marginLeft: '0px',
            transition: 'all 0.5s linear',
          }}>
          <div style={
              {
                transition: "all 0.2s linear",
                transitionDelay: "1.3s",
                backgroundColor: '#FFE300',
                marginTop: '24px',
                width: '0px',
                height: "13px",
                marginLeft: "5px",
                position: "fixed"
              }} className="logoLine"/>
          {
            this.props.contact === 0 ? <div>
            <img src="/image/logo1.png" className="logoImage" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              marginTop: "20px",
              transform: "rotate(90deg)",
              marginLeft: "11px",
              opacity: "0.9",
              position: "fixed"
            }}/>
            <img src="/image/logo2.png" className="logo" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              transitionDelay: "0.2s",
              marginTop: "-35px",
              marginLeft: "44.5px",
              opacity: "0.9",
              position: "fixed"
            }}/>
            <img src="/image/logo3.png" className="logo" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              transitionDelay: "0.4s",
              marginTop: "-35px",
              marginLeft: "70px",
              opacity: "0.9",
              position: "fixed"
            }}/>
            <img src="/image/logo4.png" className="logo" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              transitionDelay: "0.6s",
              marginTop: "-35px",
              marginLeft: "95px",
              opacity: "0.9",
              position: "fixed"
            }}/>
            <img src="/image/logo5.png" className="logo" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              transitionDelay: "0.8s",
              marginTop: "-35px",
              marginLeft: "119.6px",
              opacity: "0.9",
              position: "fixed"
            }}/></div> :
            <img src="/image/logowhite.png" style={{
              marginTop: '20px',
              position: 'fixed',
              opacity: 0.9,
              marginLeft: '11px',
              width: '127px',
            }}/>
          }
        </div>
        <div ref="menuIconDiv" style={{
          float: 'right',
          marginTop: '20px',
          marginRight: '-20px',
          transition: 'all 0.3s linear',
          transitionDelay: '1.5s',
        }}>
          <MenuIcon ref="menuIcon" contact={this.props.contact} onClick={this.menuOnClick}/>
        </div>
        <div style={{float: 'right'}} onClick={this.props.clickContact}>
          <div style={{
            marginTop: '24px',
            marginRight: '-100px',
            float: 'right',
            transition: "all 0.5s linear",
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
              this.props.contact === 0 ?
              <img src="/image/button_contact_mobile@2x.png"
                style={{position: "fixed", opacity: 0.9, marginLeft: 5, height: '16.3px', width: '72px'}}/> :
              <img src="/image/contact.png"
                style={{position: "fixed", opacity: 0.9, marginLeft: 5, height: '16.3px', width: '72px'}}/>
            }
          </div>
        </div>
        <div style={{float: 'right'}} onClick={this.props.clickPortfolio}>
          <div style={{
            marginTop: '24px',
            marginRight: '-100px',
            float: 'right',
            transition: "all 0.5s linear",
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
              this.props.contact === 0 ?
              <img src="/image/button_portfolio_mobile@2x.png"
                style={{position: "fixed", opacity: 0.9, marginLeft: 5, height: '16.3px', width: '88px'}}/> :
              <img src="/image/portfolio.png"
                style={{position: "fixed", opacity: 0.9, marginLeft: 5, height: '16.3px', width: '88px'}}/>
            }
          </div>
        </div>
        <div style={{float: 'right'}} onClick={this.props.clickAbout}>
          <div style={{
            marginTop: '24px',
            marginRight: '-100px',
            float: 'right',
            transition: "all 0.5s linear",
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
              this.props.contact === 0 ?
              <img src="/image/button_about_mobile@2x.png"
                style={{position: "fixed", opacity: 0.9, marginLeft: 6, height: '16.3px', width: '60px'}}/> :
              <img src="/image/about.png"
                style={{position: "fixed", opacity: 0.9, marginLeft: 6, height: '16.3px', width: '60px'}}/>
            }
          </div>
        </div>
      </div>
    )
  }
}
