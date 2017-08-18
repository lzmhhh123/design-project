import React, {Component} from 'react'
import {Animation} from 'styled-animation'
import { SectionsContainer, Section } from 'react-fullpage'

class Page1 extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div style={{marginTop: '15%', height: '85%'}}>
        <div style={{
          marginTop: '25%',
          fontSize: '150%',
          fontFamily: 'Helvetica',
          width: 'fit-content',
          width: '-webkit-fit-content',
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <div style={{height: 15, width: 'fit-content', width: '-webkit-fit-content'}}>
            一家小，而美的品牌策划公司
          </div>
          <div style={{height: 10, width: '100%', background: '#FEE300'}}></div>
        </div>
        <div style={{
          height: '60%',
          backgroundImage: 'url(/image/二维码.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 70%',
          backgroundSize: '50% 66.67%'
        }}></div>
        <div style={{height: '10%'}}/>
        <div style={{textAlign: 'center', fontFamily: 'Helvetica', fontSize: '70%'}}>
          media@xiaodeqihua.com<br /><br />
          上海市 静安区 威海路696号<br /><br />
          No.696 Weihai Road, Jing An District ,Shanghai
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
      anchors:              this.mapAnchors(),
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
