import React, { Component } from 'react'
import MenuIcon from './MenuIcon'
import {fadeIn} from 'react-animations'
import { Animation } from 'styled-animation'

export default class  extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    setTimeout(() => {
      let logoImage = document.getElementsByClassName("logoImage")
      logoImage[0].style.transform = "rotate(0deg)"
      let logo = document.getElementsByClassName("logo")
      for(let i = 0; i < 4; ++i) {
        logo[i].style.marginTop = "35px"
      }
      let logoLine = document.getElementsByClassName("logoLine")
      logoLine[0].style.width = "135px"
      let aboutLogo = document.getElementsByClassName("aboutLogo")
      aboutLogo[0].style.marginRight = "130px"
      let portfolioLogo = document.getElementsByClassName("portfolioLogo")
      portfolioLogo[0].style.marginRight = "150px"
      let contactLogo = document.getElementsByClassName("contactLogo")
      contactLogo[0].style.marginRight = "200px"
    }, 0)
  }

  componentWillReceiveProps(nextProps) {
    setTimeout(() => {
      let logoLine = document.getElementsByClassName("logoLine")
      let aboutLine = document.getElementsByClassName("aboutLine")
      let portfolioLine = document.getElementsByClassName("portfolioLine")
      let contactLine = document.getElementsByClassName("contactLine")
      logoLine[0].style.transitionDelay = '0s'
      logoLine[0].style.width = (nextProps.home === 1 ? '135px' : '0px')
      aboutLine[0].style.width = (nextProps.about === 1 ? '68px' : '0px')
      portfolioLine[0].style.width = (nextProps.portfolio === 1 ? '110px' : '0px')
      contactLine[0].style.width = (nextProps.contact === 1 ? '93px' : '0px')
    }, 0)
  }

  render() {
    return (
      <div>
        <div style={{float: 'left'}} onClick={this.props.clickHome}>
          <div style={
              {
                transition: "all 0.2s linear",
                transitionDelay: "1.3s",
                backgroundColor: 'orange',
                marginTop: '40px',
                width: '0px',
                height: "15px",
                marginLeft: "50px",
                position: "fixed"
              }} className="logoLine"/>
          <img src="/image/logo1.png" className="logoImage" style={{
            transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
            marginTop: "35px",
            transform: "rotate(90deg)",
            marginLeft: "50px",
            opacity: "0.9",
            position: "fixed"
          }}/>
          <img src="/image/logo2.png" className="logo" style={{
            transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
            transitionDelay: "0.2s",
            marginTop: "-35px",
            marginLeft: "85px",
            opacity: "0.9",
            position: "fixed"
          }}/>
          <img src="/image/logo3.png" className="logo" style={{
            transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
            transitionDelay: "0.4s",
            marginTop: "-35px",
            marginLeft: "110px",
            opacity: "0.9",
            position: "fixed"
          }}/>
          <img src="/image/logo4.png" className="logo" style={{
            transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
            transitionDelay: "0.6s",
            marginTop: "-35px",
            marginLeft: "135px",
            opacity: "0.9",
            position: "fixed"
          }}/>
          <img src="/image/logo5.png" className="logo" style={{
            transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
            transitionDelay: "0.8s",
            marginTop: "-35px",
            marginLeft: "160px",
            opacity: "0.9",
            position: "fixed"
          }}/>
        </div>
        <div style={{float: 'right'}} onClick={this.props.clickContact}>
          <div style={{
            marginTop: '45px',
            marginRight: '-130px',
            float: 'right',
            transition: "all 0.5s linear",
            transitionDelay: '1.5s'
          }} className="contactLogo">
            <div style={{
              height: '15px',
              width: '0px',
              backgroundColor: 'orange',
              transition: "all 0.2s linear",
              position: "fixed",
              marginTop: '0px'
            }} className="contactLine" />
            <img src="/image/button_contact_desktop.png" style={{position: "fixed", opacity: 0.9}}/>
          </div>
        </div>
        <div style={{float: 'right'}} onClick={this.props.clickPortfolio}>
          <div style={{
            marginTop: '45px',
            marginRight: '-130px',
            float: 'right',
            transition: "all 0.5s linear",
            transitionDelay: '1.5s'
          }} className="portfolioLogo">
            <div style={{
              height: '15px',
              width: '0px',
              backgroundColor: 'orange',
              transition: "all 0.2s linear",
              position: "fixed",
              marginTop: '0px'
            }} className="portfolioLine" />
            <img src="/image/button_portfolio_desktop.png" style={{position: "fixed", opacity: 0.9}}/>
          </div>
        </div>
        <div style={{float: 'right'}} onClick={this.props.clickAbout}>
          <div style={{
            marginTop: '45px',
            marginRight: '-130px',
            float: 'right',
            transition: "all 0.5s linear",
            transitionDelay: '1.5s'
          }} className="aboutLogo">
            <div style={{
              height: '15px',
              width: '0px',
              backgroundColor: 'orange',
              transition: "all 0.2s linear",
              position: "fixed",
              marginTop: '0px',
            }} className="aboutLine" />
            <img src="/image/button_about_desktop.png" style={{position: "fixed", opacity: 0.9}}/>
          </div>
        </div>
      </div>
    )
  }
}
