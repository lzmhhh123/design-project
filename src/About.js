import React, {Component} from 'react'
import {Animation} from 'styled-animation'
import { SectionsContainer, Section } from 'react-fullpage'
import './css/index.css'
import ii from './image/小的企划网站2.2-01.jpg'
class Page1 extends Component {
  constructor() {
    super()
    this.state = {
      height: 0
    }
  }

  render() {
    return (
          <img src={ii} style={{
            width:'90%',
            maxWidth:'180vh',
          position: 'absolute',
          left: 0,
          right: 0,
          margin: 'auto',
          marginTop: '150px'
          }}/>
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
