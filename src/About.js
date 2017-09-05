import React, {Component} from 'react'
import {Animation} from 'styled-animation'
import { SectionsContainer, Section } from 'react-fullpage'
import './css/index.css'

class Page1 extends Component {
  constructor() {
    super()
    this.state = {
      height: 0
    }
  }

  handleResize(event) {
    event.preventDefault()
    this.setState({
      height: window.screen.availHeight * 0.8 * document.body.clientWidth / window.screen.availWidth
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this))
    this.setState({
      height: window.screen.availHeight * 0.8 * document.body.clientWidth / window.screen.availWidth
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this))
  }

  render() {
    return (
      <div style={{
        overflow: 'hidden',
        width: '100%',
        height: this.state.height,
        paddingTop: '10%',
        paddingLeft: '5.469%',
        paddingRight: '6.562%'
      }}>
        <div style={{
          display: 'inline-table',
          marginLeft:'3%',
          width: '45%',
          height: '84%',
          backgroundImage: 'url(/image/小的企划网站2.2-19.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% auto'
        }} />
        <div style={{
          display: 'inline-table',
          width: '45%',
          marginLeft: '5%',
          height: '84%',
          backgroundImage: 'url(/image/小的企划网站2.2-18.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% auto'
        }} />
      </div>
    )
  }
}

export default class extends Component {
  constructor() {
    super()
  }
  render() {
    let options = {
      activeClass:          'active',
      anchors:              ['section1'],
      arrowNavigation:      true,
      className:            'SectionContainer',
      delay:                500,
      navigation:           false,
      scrollBar:            false,
      sectionClassName:     'Section',
      sectionPaddingTop:    '0',
      sectionPaddingBottom: '0',
      verticalAlign:        false
    }
    return (
      <Animation name="slideInUp" duration="1s">
        <SectionsContainer {...options} >
          <Section style={{height:'100px',overflow:'hidden'}}><Page1 /></Section>
        </SectionsContainer>
      </Animation>
    )
  }
}
