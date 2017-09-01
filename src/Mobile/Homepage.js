import React, {Component} from 'react'
import { Animation } from 'styled-animation'
import { SectionsContainer, Section } from 'react-fullpage'

class Page1 extends Component {
  constructor() {
    super()
    this.state = {
      line1: '106%',
      line2: '106%',
    }
  }
  render() {
    return (
      <div style={{height: '85%', marginTop: 40, marginLeft: 'auto', marginRight: 'auto'}}>
        <img style={{width: '90%', height: '65%', marginLeft: '5%'}} src="/image/mobile/mobile_1.gif" />
        <br />
        <div style={{color: '#666666',
                  fontFamily: "PingFangSC-Light",
                  fontSize: '100%',
                  textAlign: 'center',
                  position: 'relative',
                }}>
          <br />
          <br />
          基于广告、战略、金融、创业的复合背景
          <br />
          我们为品牌创立、品牌转型、品牌升级
          <br />
          提供既科学又有创造力的
          <br />
          完美解决方案
          <br />
          <br />
          <div style={{marginLeft: '25%', marginRight: '25%'}}>
            <img src="/image/title_SB_cn.png"
              style={{opacity: 0.9, width: '100%', height: '8%'}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '10px',
              width: this.state.line1,
              transition: "all 0.5s linear",
              transitionDelay: '5s',
              marginTop: '-15px',
              marginLeft: '-3%'
            }} />
          </div>
          <br />
          <div style={{marginLeft: '20%', marginRight: '20%'}}>
            <img src="/image/title_SB_en.png"
              style={{opacity: 0.9, width: '100%', height: '8%'}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '10px',
              width: this.state.line2,
              transition: "all 0.5s linear",
              transitionDelay: '5s',
              marginTop: '-15px',
              marginLeft: '-3%'
            }} />
          </div>
        </div>
      </div>
    )
  }
}

class Page2 extends Component {
  constructor() {
    super()
    this.state = {
      line1: '106%',
      line2: '106%',
    }
  }
  render() {
    return (
      <div className="right" style={{height: '85%', marginTop: 65, width: '100%'}}>
        <img style={{width: '90%', height: '60%', marginRight: '5%'}} src="/image/mobile/mobile_2.gif" />
        <br />
        <div style={{color: '#666666',
                  fontFamily: "PingFangSC-Light",
                  fontSize: '100%',
                  textAlign: 'center',
                  position: 'relative',
                }}>
          <br />
          <br />
          依靠精心策划的品牌策略
          <br />
          以及对消费市场的洞察
          <br />
          我们致力于创造既让人惊叹、又逼人买单的杰出作品
          <br />
          我们擅长的不多，也就全案、活动、视频、平面等等
          <br />
          <br />
          <div style={{marginLeft: '25%', marginRight: '25%'}}>
            <img src="/image/title_CPD_cn.png"
              style={{opacity: 0.9, width: '100%', height: '8%'}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '10px',
              width: this.state.line1,
              transition: "all 0.5s linear",
              transitionDelay: '2s',
              marginTop: '-15px',
              marginLeft: '-3%'
            }} />
          </div>
          <br />
          <div style={{marginLeft: '10%', marginRight: '10%'}}>
            <img src="/image/title_CPD_en.png"
              style={{opacity: 0.9, width: '100%', height: '8%'}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '10px',
              width: this.state.line2,
              transition: "all 0.5s linear",
              transitionDelay: '2s',
              marginTop: '-15px',
              marginLeft: '-3%'
            }} />
          </div>
        </div>
      </div>
    )
  }
}

class Page3 extends Component {
  constructor() {
    super()
    this.state = {
      line1: '106%',
      line2: '106%',
    }
  }

  render() {
    return (
      <div style={{height: '85%', marginTop: 50, width: '100%'}}>
        <img style={{width: '90%', height: '65%', marginLeft: '5%'}} src="/image/mobile/mobile_3.gif" />
        <div style={{color: '#666666',
                  fontFamily: "PingFangSC-Light",
                  fontSize: '100%',
                  textAlign: 'center',
                  position: 'relative',
                }}>
          <br />
          <br />
          我们坚信有趣就是生产力的一部分
          <br />
          另一部分是不可描述的精耕细作
          <br />
          我们与客户深入合作
          <br />
          将一切好的立意，变成实在的效益，并且共同承担风险收益
          <br />
          <br />
          <div style={{marginLeft: '21%', marginRight: '21%'}}>
            <img src="/image/title_SMS_cn.png"
              style={{opacity: 0.9, width: '100%', height: '8%'}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '10px',
              width: this.state.line1,
              transition: "all 0.5s linear",
              transitionDelay: '2s',
              marginTop: '-15px',
              marginLeft: '-3%'
            }} />
          </div>
          <br />
          <div style={{marginLeft: '5%', marginRight: '5%'}}>
            <img src="/image/title_SMS_en.png"
              style={{opacity: 0.9, width: '100%', height: '8%'}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '10px',
              width: this.state.line2,
              transition: "all 0.5s linear",
              transitionDelay: '2s',
              marginTop: '-15px',
              marginLeft: '-3%'
            }} />
          </div>
        </div>
      </div>
    )
  }
}

class Page4 extends Component {
  constructor() {
    super()
    this.state = {
      line1: '106%',
      line2: '106%',
    }
  }

  render() {
    return (
      <div className="right" style={{height: '85%', marginTop: '16%'}}>
        <img src="/image/mobile/mobile_4.gif" style={{width: '90%', height: '60%', marginRight: '5%'}}/>
        <br />
        <div style={{color: '#666666',
                  fontFamily: "PingFangSC-Light",
                  fontSize: '100%',
                  textAlign: 'center',
                  position: 'relative',
                }}>
          <br />
          <br />
          “文案日成堆，愁眉展不开……”小编抱怨道
          <br />
          我们却回答：“成堆是谁？”
          <br />
          有个资历颇深的砖家说过：“抓住年轻人，才能抓住新市场；
          <br />
          懂得骚浪贱，才能抓住年轻人”大概说的，就是我司。
          <br />
          <br />
          <div style={{marginLeft: '25%', marginRight: '25%'}}>
            <img src="/image/title_SM_cn.png"
              style={{opacity: 0.9, width: '100%', height: '6%'}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '10px',
              width: this.state.line1,
              transition: "all 0.5s linear",
              transitionDelay: '2s',
              marginTop: '-15px',
              marginLeft: '-3%'
            }} />
          </div>
          <br />
          <div style={{marginLeft: '26%', marginRight: '26%'}}>
            <img src="/image/title_SM_en.png"
              style={{opacity: 0.9, width: '100%', height: '6%'}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '10px',
              width: this.state.line2,
              transition: "all 0.5s linear",
              transitionDelay: '2s',
              marginTop: '-15px',
              marginLeft: '-3%'
            }} />
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

  render() {
    let options = {
      activeClass:          'active',
      anchors:              ['sectionOne'],
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
      <Animation name="slideInUp" duration="2s" >
        <SectionsContainer {...options} >
          <Section><div /></Section>
        </SectionsContainer>
      </Animation>
    )
  }
}
