import React, {Component} from 'react'
import {Animation} from 'styled-animation'
import { SectionsContainer, Section } from 'react-fullpage'

class Page1 extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div style={{marginTop: 70, height: '85%'}}>
        <div style={{
          fontSize: '150%',
          fontFamily: 'Helvetica',
          width: 'fit-content',
          width: '-webkit-fit-content',
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          height: '100%',
          width: '100%'
        }}>
          <img src="/image/contactView.jpeg" style={{width: '90vw', maxWidth: '53vh'}}/>
          <br />
          <div style={{marginTop:40, textAlign: 'center', fontFamily: 'PingFangSC-Ultralight', color:'black',fontSize: '3.5vw'}}>
            上海市 静安区 威海路696号<br />
            No.696 Weihai Road,  Jing An District ,  Shanghai<br />
            media@xiaodeqihua.com<br />
          </div>
        </div>
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
    for(let i = 1; i <= 2; ++i) {
      r = r.concat(['section' + i])
    }
    return r
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
          <Section><Page1 /></Section>
        </SectionsContainer>
      </Animation>
    )
  }
}
