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
          <div style={{height: 20, width: 'fit-content', width: '-webkit-fit-content'}}>
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
      <div style={{height: '85%', marginTop: '15%', marginLeft: '8%'}}>
        <div style={{
          marginTop: '25%',
          fontFamily: 'Helvetica',
          fontSize: '170%',
          width: 'fit-content',
          width: '-webkit-fit-content'
        }}>
          <div style={{height: 16, width: 'fit-content', width: '-webkit-fit-content'}}>This is what we do</div>
          <div style={{width: '105%', height: 8, background: '#FFE300' }}></div>
        </div>
        <div style={{
          marginTop: '10%',
          fontSize: '80%',
          fontFamily: 'Helvetica'
        }}>
          小的企划 —— 一间小而美的广告公司， <br /><br />
          立志于解决一个没什么人想解决的问题: <br /><br />
          “如何给小公司做小预算的品牌营销，用100万做出1个亿 <br /><br />
          的效果?”。 <br /><br />
          在“消费升级、地产革新、实体店重生”的市场背景下， <br /><br />
          我们志在成为新商业领域的品牌营销专家。
        </div>
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
          <Section><Page2 /></Section>
        </SectionsContainer>
      </Animation>
    )
  }
}
