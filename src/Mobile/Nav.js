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
        logo[i].style.marginTop = "10px"
      }
      let logoLine = document.getElementsByClassName("logoLine")
      logoLine[0].style.width = "145px"
      this.refs.menuIconDiv.style.marginRight = '16px'
    }, 0)
  }

  menuOnClick(event) {
    event.preventDefault()
    let aboutLogo = document.getElementsByClassName("aboutLogo")
    let portfolioLogo = document.getElementsByClassName("portfolioLogo")
    let contactLogo = document.getElementsByClassName("contactLogo")
    let logoAll = document.getElementsByClassName('logoAll')
    if(this.refs.menuIcon.state.s === 0) {
      contactLogo[0].style.marginRight = "110px"
      aboutLogo[0].style.marginRight = "90px"
      portfolioLogo[0].style.marginRight = "120px"
      logoAll[0].style.marginLeft = '-200px'
    }
    else {
      contactLogo[0].style.marginRight = this.props.contact ? "100px" : "-200px"
      aboutLogo[0].style.marginRight = this.props.about ? "80px" : "-200px"
      portfolioLogo[0].style.marginRight = this.props.portfolio ? "120px" : "-200px"
      logoAll[0].style.marginLeft = "-6px"
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
        logo[i].style.marginTop = "10px"
      }
      logoLine[0].style.width = (nextProps.home === 1 ? '145px' : '0px')
      aboutLine[0].style.width = (nextProps.about === 1 ? '72px' : '0px')
      portfolioLine[0].style.width = (nextProps.portfolio === 1 ? '108px' : '0px')
      contactLine[0].style.width = (nextProps.contact === 1 ? '92px' : '0px')
      if (nextProps.home) {
        let aboutLogo = document.getElementsByClassName("aboutLogo")
        let portfolioLogo = document.getElementsByClassName("portfolioLogo")
        let contactLogo = document.getElementsByClassName("contactLogo")
        contactLogo[0].style.marginRight = "-200px"
        aboutLogo[0].style.marginRight = "-200px"
        portfolioLogo[0].style.marginRight = "-200px"
      }
    }, 0)
  }

  render() {
    return (
      <div>
        <div className="logoAll" onClick={this.props.clickHome}
          style={{
            float: 'left',
            marginLeft: '-6px',
            marginTop: '10px',
            transition: 'all 0.3s linear',
          }}>
          <div style={{
              transition: "all 0.2s linear",
              transitionDelay: "1.3s",
              backgroundColor: '#FFE300',
              marginTop: '20px',
              width: '0px',
              height: "13px",
              marginLeft: "21px",
              position: "fixed"
            }} className="logoLine"/>
          <div style={{marginLeft: 13}}>
            <img src="/image/logo1.png" className="logoImage" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              marginTop: "10px",
              transform: "rotate(90deg)",
              marginLeft: "11px",
              opacity: "0.9",
              width: 28,
              height: 27,
              position: "fixed"
            }}/>
            <img src="/image/logo2.pic" className="logo" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              transitionDelay: "0.2s",
              marginTop: "-35px",
              marginLeft: "46.5px",
              opacity: "0.9",
              width: 19,
              height: 27,
              position: "fixed"
            }}/>
            <img src="/image/logo3.pic" className="logo" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              transitionDelay: "0.4s",
              marginTop: "-35px",
              marginLeft: "74px",
              opacity: "0.9",
              width: 19,
              height: 27,
              position: "fixed"
            }}/>
            <img src="/image/logo4.png" className="logo" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              transitionDelay: "0.6s",
              marginTop: "-35px",
              marginLeft: "101px",
              opacity: "0.9",
              width: 21,
              height: 27,
              position: "fixed"
            }}/>
            <img src="/image/logo5.png" className="logo" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              transitionDelay: "0.8s",
              marginTop: "-35px",
              marginLeft: "127.6px",
              opacity: "0.9",
              width: 19,
              height: 27,
              position: "fixed"
            }}/>
          </div>
        </div>
        <div ref="menuIconDiv" style={{
          float: 'right',
          marginTop: '17px',
          marginRight: '-150px',
          transition: 'all 0.3s linear',
          transitionDelay: '1.5s',
          width: 'fit-content', width: '-webkit-fit-content'
        }}>
          <MenuIcon ref="menuIcon" about={this.props.about} onClick={this.menuOnClick}/>
        </div>
        <div style={{float: 'right'}} onClick={this.props.clickContact}>
          <div style={{
            marginTop: '25px',
            marginRight: '-120px',
            float: 'right',
            transition: "all 0.3s linear",
          }} className="contactLogo">
            <div style={{
              height: '13px',
              width: '0px',
              backgroundColor: '#FFE300',
              transition: "all 0.2s linear",
              position: "fixed",
              marginTop: '1px'
            }} className="contactLine" />
              <img src="/image/button_contact_mobile@2x.png"
                style={{position: "fixed", opacity: 0.9, marginLeft: 5,marginTop: 1, height: '14px'}}/>
          </div>
        </div>
        <div style={{float: 'right'}} onClick={this.props.clickPortfolio}>
          <div style={{
            marginTop: '25px',
            marginRight: '-100px',
            float: 'right',
            transition: "all 0.3s linear",
          }} className="portfolioLogo">
            <div style={{
              height: '13px',
              width: '0px',
              backgroundColor: '#FFE300',
              transition: "all 0.2s linear",
              position: "fixed",
              marginTop: '1px'
            }} className="portfolioLine" />
              <img src="/image/button_portfolio_mobile@2x.png"
                style={{position: "fixed", opacity: 0.9, marginLeft: 5,marginTop: 1, height: '14px'}}/>
          </div>
        </div>
        <div style={{float: 'right'}} onClick={this.props.clickAbout}>
          <div style={{
            marginTop: '25px',
            marginRight: '-100px',
            float: 'right',
            transition: "all 0.3s linear",
          }} className="aboutLogo">
            <div style={{
              height: '13px',
              width: '0px',
              backgroundColor: '#FFE300',
              transition: "all 0.2s linear",
              position: "fixed",
              marginTop: '1px',
            }} className="aboutLine" />
              <img src="/image/button_about_mobile@2x.png"
                style={{position: "fixed", opacity: 0.9, marginLeft: 6,marginTop: 1,height: '14px'}}/>
          </div>
        </div>
      </div>
    )
  }
}
