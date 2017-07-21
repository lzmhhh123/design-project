import React, {Component} from 'react'
import { Animation } from 'styled-animation'
import { SectionsContainer, Section } from 'react-fullpage'
import './css/homep1.css'

class Page1 extends Component {
  constructor() {
    super()
    this.state = {
      line1: 0,
      line2: 0
    }
  }

  render() {
    return (
      <div>
        <img className="gif" src="/image/preview_1.gif" />
        <br />
        <div style={{color: '#666666',
                  fontFamily: "Microsoft Yahei",
                  fontSize: '12pt',
                  textAlign: 'right',
                  position: 'relative',
                  bottom: '370px',
                  right: '50px'
                }}>
          <div>
            <div style={{
              backgroundColor: 'orange',
              height: '20px',
              width: this.state.line1 + 'px',
              transition: "all 0.5s linear",
              position: 'absolute',
              top: '28px',
              right: '-5px'
            }} />
            <img src="/image/title_SB_cn.png"
              onMouseMove={() => {this.setState({ line1: 345, line2: 425})}}
              onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
              style={{opacity: 0.9}}
            />
          </div>
          <br />
          <div>
            <div style={{
              backgroundColor: 'orange',
              height: '20px',
              width: this.state.line2 + 'px',
              transition: "all 0.5s linear",
              position: 'absolute',
              top: '100px',
              right: '-5px'
            }} />
            <img src="/image/title_SB_en.png"
              onMouseMove={() => {this.setState({ line1: 345, line2: 425})}}
              onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
              style={{opacity: 0.9}}
            />
          </div>
          <br />
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
      line2: 0
    }
  }

  render() {
    return (
      <div className="right">
        <img className="gif" src="/image/preview_2.gif" style={{marginLeft: '500px'}}/>
        <br />
        <div style={{color: '#666666',
                  fontFamily: "Microsoft Yahei",
                  fontSize: '12pt',
                  textAlign: 'left',
                  position: 'relative',
                  bottom: '370px',
                  left: '50px'
                }}>
          <div style={{
            backgroundColor: 'orange',
            height: '20px',
            width: this.state.line1 + 'px',
            transition: "all 0.5s linear",
            position: 'relative',
            bottom: '-50px',
          }} />
          <img src="/image/title_CPD_cn.png"
            onMouseMove={() => {this.setState({ line1: 340, line2: 600})}}
            onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
            style={{opacity: 0.9}}
          />
          <br />
          <div style={{
            backgroundColor: 'orange',
            height: '20px',
            width: this.state.line2 + 'px',
            transition: "all 0.5s linear",
            position: 'relative',
            bottom: '-50px',
          }} />
          <img src="/image/title_CPD_en.png"
            onMouseMove={() => {this.setState({ line1: 345, line2: 600})}}
            onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
            style={{opacity: 0.9}}
          />
          <br />
          基于广告、战略咨询、金融、创业的
          <br />
          复合背景
          <br />
          <br />
          我们为品牌创立、品牌转型、品牌升级
          <br />
          <br />
          提供既科学又有创造力的
          <br />
          完整解决方案
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
      line2: 0
    }
  }

  render() {
    return (
      <div>
        <img className="gif" src="/image/preview_3.gif" />
        <br />
        <div style={{color: '#666666',
                  fontFamily: "Microsoft Yahei",
                  fontSize: '12pt',
                  textAlign: 'right',
                  position: 'relative',
                  bottom: '370px',
                  right: '50px'
                }}>
          <div>
            <div style={{
              backgroundColor: 'orange',
              height: '20px',
              width: this.state.line1 + 'px',
              transition: "all 0.5s linear",
              position: 'absolute',
              right: '-5px',
              top: '28px'
            }} />
            <img src="/image/title_SMS_cn.png"
              onMouseMove={() => {this.setState({ line1: 390, line2: 600})}}
              onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
              style={{opacity: 0.9}}
            />
          </div>
          <br />
          <div>
            <div style={{
              backgroundColor: 'orange',
              height: '20px',
              width: this.state.line2 + 'px',
              transition: "all 0.5s linear",
              position: 'absolute',
              right: '-5px',
              top: '100px',
            }} />
            <img src="/image/title_SMS_en.png"
              onMouseMove={() => {this.setState({ line1: 390, line2: 600})}}
              onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
              style={{opacity: 0.9}}
            />
          </div>
          <br />
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
      line2: 0
    }
  }

  render() {
    return (
      <div className="right">
        <div className="gifp4"></div>
        <br />
        <div style={{color: '#666666',
                  fontFamily: "Microsoft Yahei",
                  fontSize: '12pt',
                  textAlign: 'left',
                  position: 'relative',
                  bottom: '370px',
                  left: '50px'
                }}>
          <div style={{
            backgroundColor: 'orange',
            height: '20px',
            width: this.state.line1 + 'px',
            transition: "all 0.5s linear",
            position: 'relative',
            bottom: '-50px',
          }} />
          <img src="/image/title_SM_cn.png"
            onMouseMove={() => {this.setState({ line1: 290, line2: 280})}}
            onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
            style={{opacity: 0.9}}
          />
          <br />
          <div style={{
            backgroundColor: 'orange',
            height: '20px',
            width: this.state.line2 + 'px',
            transition: "all 0.5s linear",
            position: 'relative',
            bottom: '-50px',
          }} />
          <img src="/image/title_SM_en.png"
            onMouseMove={() => {this.setState({ line1: 345, line2: 600})}}
            onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
            style={{opacity: 0.9}}
          />
          <br />
          <br />
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
      <Animation name="slideInUp" duration="4s" >
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
