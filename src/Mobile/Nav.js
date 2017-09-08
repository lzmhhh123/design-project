import React, { Component } from 'react'
import MenuIcon from './MenuIcon'
import {fadeIn} from 'react-animations'
import { Animation } from 'styled-animation'
import logo1 from '../image/logo1.png'
import logo2 from '../image/logo2.pic'
import logo3 from '../image/logo3.pic'
import logo4 from '../image/logo4.png'
import logo5 from '../image/logo5.png'
import iabout from '../image/button_about_mobile@2x.png'
import icontact from '../image/button_contact_mobile@2x.png'
import iportfolio from '../image/button_portfolio_mobile@2x.png'



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
      logoLine[0].style.width = "135px"
      this.refs.menuIconDiv.style.marginRight = '16px'
    }, 0)
  }

  menuOnClick(event) {
    event.preventDefault()
    if (!this.aboutLogo)
      this.aboutLogo = document.getElementsByClassName("aboutLogo")
    if (!this.portfolioLogo)
      this.portfolioLogo = document.getElementsByClassName("portfolioLogo")
    if (!this.contactLogo)
      this.contactLogo = document.getElementsByClassName("contactLogo")
    if (!this.logoAll)
      this.logoAll = document.getElementsByClassName("logoAll")
    if(this.refs.menuIcon.state.s === 0) {
      this.contactLogo[0].style.marginRight = "110px"
      this.aboutLogo[0].style.marginRight = "90px"
      this.portfolioLogo[0].style.marginRight = "120px"
      this.logoAll[0].style.marginLeft = '-200px'
    }
    else {
      this.contactLogo[0].style.marginRight = this.props.contact ? "100px" : "-200px"
      this.aboutLogo[0].style.marginRight = this.props.about ? "80px" : "-200px"
      this.portfolioLogo[0].style.marginRight = this.props.portfolio ? "120px" : "-200px"
      this.logoAll[0].style.marginLeft = "-6px"
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
      logoLine[0].style.width = (nextProps.home === 1 ? '135px' : '0px')
      aboutLine[0].style.width = (nextProps.about === 1 ? '70px' : '0px')
      portfolioLine[0].style.width = (nextProps.portfolio === 1 ? '108px' : '0px')
      contactLine[0].style.width = (nextProps.contact === 1 ? '93px' : '0px')
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
            width: '180px',
            height: '50px'
          }}>
          <div style={{
              transition: "all 0.5s linear",
              transitionDelay: "1.3s",
              backgroundColor: '#FFE300',
              marginTop: '17px',
              width: '0px',
              height: "13px",
              marginLeft: "37px",
              position: "fixed"
            }} className="logoLine"/>
          <div style={{marginLeft: 13}}>
            <img src={logo1} className="logoImage" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              marginTop: "10px",
              transform: "rotate(90deg)",
              marginLeft: "28px",
              opacity: "0.9",
              height: 27,
              position: "fixed"
            }}/>
            <img src={logo2} className="logo" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              transitionDelay: "0.2s",
              marginTop: "-35px",
              marginLeft: "63px",
              opacity: "0.9",
              height: 27,
              position: "fixed"
            }}/>
            <img src={logo3} className="logo" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              transitionDelay: "0.4s",
              marginTop: "-35px",
              marginLeft: "87px",
              opacity: "0.9",
              height: 27,
              position: "fixed"
            }}/>
            <img src={logo4} className="logo" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              transitionDelay: "0.6s",
              marginTop: "-35px",
              marginLeft: "110px",
              opacity: "0.9",
              height: 27,
              position: "fixed"
            }}/>
            <img src={logo5} className="logo" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              transitionDelay: "0.8s",
              marginTop: "-35px",
              marginLeft: "136px",
              opacity: "0.9",
              height: 27,
              position: "fixed"
            }}/>
          </div>
        </div>
        <div ref="menuIconDiv" style={{
          float: 'right',
          marginTop: '15px',
          marginRight: '-150px',
          paddingRight: '10px',
          transition: 'all 0.3s linear',
          transitionDelay: '1.5s',
          width: 'fit-content', width: '-webkit-fit-content'
        }}>
          <MenuIcon ref="menuIcon" about={this.props.about} onClick={this.menuOnClick}/>
        </div>
        <div style={{float: 'right'}} onClick={(e)=>{this.props.clickContact(e)}}>
          <div style={{
            marginTop: '25px',
            marginRight: '-120px',
            float: 'right',
            transition: "all 0.3s linear",
          }} className="contactLogo">
            <div style={{
              height: '14px',
              width: '0px',
              backgroundColor: '#FFE300',
              transition: "all 0.5s linear",
              position: "fixed",
              marginTop: '1px',
              marginLeft: '1px'
            }} className="contactLine" />
              <img src={icontact}
                style={{position: "fixed", opacity: 0.9, marginLeft: 5,marginTop: 1, height: '14px'}}/>
          </div>
        </div>
        <div style={{float: 'right'}} onClick={(e)=>{this.props.clickPortfolio(e)}}>
          <div style={{
            marginTop: '25px',
            marginRight: '-100px',
            float: 'right',
            transition: "all 0.3s linear",
          }} className="portfolioLogo">
            <div style={{
              height: '14px',
              width: '0px',
              backgroundColor: '#FFE300',
              transition: "all 0.5s linear",
              position: "fixed",
              marginTop: '1px',
              marginLeft: '1px'
            }} className="portfolioLine" />
              <img src={iportfolio}
                style={{position: "fixed", opacity: 0.9, marginLeft: 5,marginTop: 1, height: '14px'}}/>
          </div>
        </div>
        <div style={{float: 'right'}} onClick={(e)=>{
              let aboutLine = document.getElementsByClassName("aboutLine")
              aboutLine[0].style.width = '70px'
              this.props.clickAbout(e);
              setTimeout(() => {this.menuOnClick(e)}, 300)}}>
          <div style={{
            marginTop: '25px',
            marginRight: '-100px',
            float: 'right',
            transition: "all 0.3s linear",
          }} className="aboutLogo">
            <div style={{
              height: '14px',
              width: '0px',
              backgroundColor: '#FFE300',
              transition: "all 0.5s linear",
              position: "fixed",
              marginTop: '1px',
              marginLeft: '2px'
            }} className="aboutLine" />
              <img src={iabout}
                style={{position: "fixed", opacity: 0.9, marginLeft: 6,marginTop: 1,height: '14px'}}/>
          </div>
        </div>
      </div>
    )
  }
}
