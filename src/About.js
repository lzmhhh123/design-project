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
          media@xiaodeqihua.com<br /><br />
          上海市 静安区 威海路696号<br /><br />
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
      <div style={{marginTop: '150px', height: '85%'}}>
        <div style={{width: '100%', display: 'table', height: '70%'}}>
          <div style={{display: 'inline-table', width: '50%', height: '100%'}}>
            <div style={{textAlign: 'center', fontFamily: 'Helvetica', height: 20, fontSize: 30, marginTop: '18%'}}>
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
          </div>
          <div style={{display: 'inline-table', width: '50%', height: '100%', backgroundImage: 'url(/image/二维码.png)', backgroundPosition: 'center'}} />
        </div>
        <Footer isAddress={true} />
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
