import React, {Component} from 'react'
import {Animation} from 'styled-animation'
import { SectionsContainer, Section } from 'react-fullpage'

class Page1 extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div style={{height: '85%', marginTop: '15%'}}>
      </div>
    )
  }
}

class Page2 extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div style={{height: '85%', marginTop: '15%'}}>
      </div>
    )
  }
}

class Page3 extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div style={{height: '85%', marginTop: '15%'}}>
      </div>
    )
  }
}

export default class extends Component {
  constructor() {
    super()
  }
  mapAnchors() {
    let r = []
    for(let i = 1; i <= 3; ++i) {
      r = r.concat(['section' + i])
    }
    return r
  }
  render() {
    let options = {
      activeClass:          'active',
      anchors:              this.mapAnchors(),
      arrowNavigation:      true,
      className:            'SectionContainer',
      delay:                2000,
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
          <Section><Page2 /></Section>
          <Section><Page3 /></Section>
        </SectionsContainer>
      </Animation>
    )
  }
}
