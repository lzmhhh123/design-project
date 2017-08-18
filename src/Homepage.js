import React, {Component} from 'react'
import { Animation } from 'styled-animation'
import { SectionsContainer, Section } from 'react-fullpage'
import './css/homep4.css'
import './css/homep1.css'
import './css/homep2.css'
import './css/homep3.css'

class Page1 extends Component {
  constructor() {
    super()
    this.state = {
      line1: 0,
      line2: 0,
    }
  }

  render() {
    return (
      <div style={{height: '85%'}}>
        <div className='gifp1' />
        <br />
        <div style={{color: '#666666',
                  fontFamily: "Helvetica",
                  fontSize: '13pt',
                  textAlign: 'right',
                  position: 'relative',
                  right: '50px',
                  width: '40%',
                  marginLeft: '60%'
                }}>
          <br />
          基于广告、战略、金融、创业的复合背景
          <br />
          <br />
          我们为品牌创立、品牌转型、品牌升级
          <br />
          <br />
          提供既科学又有创造力的
          <br />
          完美解决方案
          <br />
          <br />
          <div style={{float: 'right', width: 345}}>
            <img src="/image/title_SB_cn.png"
              onMouseMove={() => {this.setState({ line1: 345, line2: 425})}}
              onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
              style={{opacity: 0.9}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '15px',
              width: this.state.line1 + 'px',
              transition: "all 0.5s linear",
              marginTop: '-15px'
            }} />
          </div>
          <br />
          <div style={{float: 'right', width: 425, marginTop: 8}}>
            <img src="/image/title_SB_en.png"
              onMouseMove={() => {this.setState({ line1: 345, line2: 425})}}
              onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
              style={{opacity: 0.9}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '15px',
              width: this.state.line2 + 'px',
              transition: "all 0.5s linear",
              marginTop: '-25px'
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
      line1: 0,
      line2: 0,
    }
  }

  render() {
    return (
      <div className="right" style={{height: '85%'}}>
        <div className='gifp2'/>
        <br />
        <div style={{color: '#666666',
                  fontFamily: "Helvetica",
                  fontSize: '13pt',
                  textAlign: 'left',
                  position: 'relative',
                  marginLeft: '50px',
                  width: '40%'
                }}>
          依靠精心策划的品牌策略
          <br />
          以及对消费市场的洞察
          <br />
          <br />
          我们致力于创造既让人惊叹、
          <br />
          又逼人买单的杰出作品
          <br />
          <br />
          我们擅长的不多，
          <br />
          也就全案、活动、视频、平面等等
          <br />
          <br />
          <div style={{
            backgroundColor: '#FFE300',
            height: '15px',
            width: this.state.line1 + 'px',
            transition: "all 0.5s linear",
            position: 'relative',
            bottom: '-45px',
          }} />
          <img src="/image/title_CPD_cn.png"
            onMouseMove={() => {this.setState({ line1: 340, line2: 600})}}
            onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
            style={{opacity: 0.9}}
          />
          <br />
          <div style={{
            backgroundColor: '#FFE300',
            height: '15px',
            width: this.state.line2 + 'px',
            transition: "all 0.5s linear",
            position: 'relative',
            bottom: '-45px',
          }} />
          <img src="/image/title_CPD_en.png"
            onMouseMove={() => {this.setState({ line1: 345, line2: 600})}}
            onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
            style={{opacity: 0.9}}
          />
        </div>
      </div>
    )
  }
}

class Page3 extends Component {
  constructor() {
    super()
    this.state = {
      line1: 0,
      line2: 0,
    }
  }

  render() {
    return (
      <div style={{height: '85%'}}>
        <div className='gifp3'/>
        <div style={{color: '#666666',
                  fontFamily: "Helvetica",
                  fontSize: '13pt',
                  textAlign: 'right',
                  position: 'relative',
                  right: '50px',
                  width: '43%',
                  marginLeft: '57%'
                }}>
          我们坚信
          <br />
          有趣就是生产力的一部分
          <br />
          <br />
          另一部分
          <br />
          是不可描述的精耕细作
          <br />
          <br />
          我们与客户深入合作
          <br />
          将一切好的立意变成实在的效益
          <br />
          <br />
          并且共同承担风险收益
          <br />
          <br />
          <div style={{float: 'right', width: 390}}>
            <img src="/image/title_SMS_cn.png"
              onMouseMove={() => {this.setState({ line1: 390, line2: 600})}}
              onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
              style={{opacity: 0.9}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '15px',
              width: this.state.line1 + 'px',
              transition: "all 0.5s linear",
              marginTop: '-15px'
            }} />
          </div>
          <br />
          <div style={{float: 'right', width: 600, marginTop: 8}}>
            <img src="/image/title_SMS_en.png"
              onMouseMove={() => {this.setState({ line1: 390, line2: 600})}}
              onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
              style={{opacity: 0.9}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '15px',
              width: this.state.line2 + 'px',
              transition: "all 0.5s linear",
              marginTop: '-25px'
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
      line1: 0,
      line2: 0,
    }
  }

  render() {
    return (
      <div className="right" style={{height: '85%'}}>
        <div className="gifp4"/>
        <br />
        <div style={{color: '#666666',
                  fontFamily: "Helvetica",
                  fontSize: '13pt',
                  textAlign: 'left',
                  position: 'relative',
                  left: '50px',
                  width: '40%'
                }}>
          “文案日成堆，愁眉展不开……”
          <br />
          小编抱怨道，顺便想卖弄一波文才
          <br />
          <br />
          我们却回答：“成堆是谁？”
          <br />
          <br />
          有个资历颇深的砖家说过：
          <br />
          “抓住年轻人，才能抓住新市场；
          <br />
          懂得骚浪贱，才能抓住年轻人”
          <br />
          <br />
          大概说的，就是我司。
          <br />
          <br />
          <div style={{
            backgroundColor: '#FFE300',
            height: '15px',
            width: this.state.line1 + 'px',
            transition: "all 0.5s linear",
            position: 'relative',
            bottom: '-45px',
          }} />
          <img src="/image/title_SM_cn.png"
            onMouseMove={() => {this.setState({ line1: 290, line2: 280})}}
            onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
            style={{opacity: 0.9}}
          />
          <br />
          <div style={{
            backgroundColor: '#FFE300',
            height: '15px',
            width: this.state.line2 + 'px',
            transition: "all 0.5s linear",
            position: 'relative',
            bottom: '-45px',
          }} />
          <img src="/image/title_SM_en.png"
            onMouseMove={() => {this.setState({ line1: 345, line2: 600})}}
            onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
            style={{opacity: 0.9}}
          />
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
      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
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
          <Section><Page1 /></Section>
          <Section><Page2 /></Section>
          <Section><Page3 /></Section>
          <Section><Page4 /></Section>
        </SectionsContainer>
      </Animation>
    )
  }
}
