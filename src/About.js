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
      <div style={{marginTop: '150px'}}>
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
    )
  }
}

class Page2 extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div style={{marginTop: '150px', height: '55%', width: '100%', paddingTop: '5%'}}>
        <div style={{
          marginLeft: '10%',
          fontSize: 50,
          fontFamily: 'Helvetica',
          width: 'fit-content', width: '-webkit-fit-content'
        }}>
          <div style={{width: 'fit-content', width: '-webkit-fit-content', height: 30}}>This is what we do</div>
          <div style={{width: '100%', height: 15, background: '#FFE300'}}></div>
        </div>
        <div style={{
          marginLeft: '10%',
          marginTop: '3%',
          fontSize: 14,
          fontFamily: 'Helvetica'
        }}>
          一家小，而美的品牌策划公司。<br />
          专业领域包括:消费者洞察、市场分析、品牌战略、品牌策划、视觉设计、活动策划、广告创意、<br />
          运营推广以咨询、品牌、设计、广告、投资的多方复合背景，为客户提供「有创意」且「有实效」的专业服务。<br />
        </div>
        <div style={{
          marginLeft: '10%',
          marginTop: '3%',
          fontSize: 14,
          fontFamily: 'Helvetica'
        }}>
          一家小，而美的品牌策划公司。<br />
          专业领域包括:消费者洞察、市场分析、品牌战略、品牌策划、视觉设计、活动策划、广告创意、<br />
          运营推广以咨询、品牌、设计、广告、投资的多方复合背景，为客户提供「有创意」且「有实效」的专业服务。<br />
        </div>
        <div style={{height: '30%'}} />
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
          <Section><Page2 /></Section>
        </SectionsContainer>
      </Animation>
    )
  }
}
