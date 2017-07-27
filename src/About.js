import React, {Component} from 'react'
import {Animation} from 'styled-animation'
import { SectionsContainer, Section } from 'react-fullpage'

class Footer extends Component {
  constructor() {
    super()
  }
  render() {
    let { isAddress } = this.props
    if(isAddress) {
      return (
        <div style={{textAlign: 'center', fontFamily: 'Helvetica', fontSize: 14}}>
          media@xiaodeqihua.com<br />
          上海市 静安区 威海路696号<br />
          No.696 Weihai Road, Jing An District ,Shanghai
        </div>
      )
    }
    else {
      return (
        <div style={{textAlign: 'center', fontFamily: 'Helvetica', fontSize: 14}}>
          有想法?我们有兴趣。联系我们!<br />
          GET A PROJECT? We’d love to hear about it. Get in touch.
        </div>
      )
    }
  }
}

class Page1 extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div style={{marginTop: '130px'}}>
        <div style={{textAlign: 'center', fontFamily: 'Helvetica', height: 20, fontSize: 30, marginTop: '25%'}}>
          <div>一家小,而美的品牌策划公司</div>
        </div>
        <div style={{
          background: "#FFE300",
          height: 15,
          marginBottom: '20%',
          width: 400,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '20%'}} />
        <Footer isAddress={true} />
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
      <div style={{marginTop: '130px'}}>
        <div style={{textAlign: 'center', fontSize: 14, fontFamily: 'Helvetica', marginBottom: 100}}>Made by 小的企划</div>
        <div style={{textAlign: 'center', fontSize: 40, fontFamily: 'Helvetica'}}>
          AWW / Zai Mei Jian在梅间 / Mei Xiao Cong梅小聪<br />
          / muse de patisserie / Lara Bohinc / Something Market 有眼<br />
          Bayr / Roundabout / Tabao maker festival 造物节
        </div>
        <img src="/image/7.png" style={{width: '100%', marginTop: '-70', marginBottom: '-100'}}/>
        <Footer isAddress={false} />
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
    for(let i = 1; i <= 15; ++i) {
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
        </SectionsContainer>
      </Animation>
    )
  }
}
