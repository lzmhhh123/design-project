import React, {Component} from 'react'
import {Animation} from 'styled-animation'
import { SectionsContainer, Section } from 'react-fullpage'

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
        paddingRight: '6.562%',
        display: 'table'
      }}>
        <div style={{
          display: 'inline-table',
          width: '45%',
          height: '84%',
          backgroundImage: 'url(/image/小的企划网站2.2-19.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%'
        }} />
        <div style={{
          display: 'inline-table',
          width: '53%',
          marginLeft: '2%',
          height: '84%',
          backgroundImage: 'url(/image/小的企划网站2.2-18.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%'
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
      delay:                1000,
      navigation:           false,
      scrollBar:            false,
      sectionClassName:     'Section',
      sectionPaddingTop:    '0',
      sectionPaddingBottom: '0',
      verticalAlign:        false
    }
    return (
      <Animation name="slideInUp" duration="2s">
        <SectionsContainer {...options} >
          <Section><Page1 /></Section>
        </SectionsContainer>
      </Animation>
    )
  }
}
