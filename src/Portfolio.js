import React, {Component} from 'react'
import {Animation} from 'styled-animation'
import { SectionsContainer, Section } from 'react-fullpage'
import {browserHistory} from 'react-router'

//
// class Page1 extends Component {
//   constructor() {
//     super()
//   }
//   render() {
//     return (
//       <div style={{
//         height: '70%',
//         marginTop: 150,
//         width: '100%',
//         backgroundImage: 'url(/image/number.png)',
//         backgroundSize: '70% 50%',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: '40% 60%'
//       }}>
//         <div style={{fontSize: 20 * document.body.clientWidth / 1679, fontFamily: 'Helvetica', width: '100%', color: 'white', display: 'table'}}>
//           <div style={{marginLeft: '15%', display: 'inline-block'}}>—OFFICE</div>
//           <div style={{marginLeft: '15%', display: 'inline-block'}}>—PEOPLE</div>
//           <div style={{marginLeft: '20%', display: 'inline-block'}}>—PROJECT</div>
//         </div>
//       </div>
//     )
//   }
// }
//
// class Page2 extends Component {
//   constructor() {
//     super()
//   }
//   render() {
//     const rowStyle= {width: '100%', display: 'table', height: '33.3%'}
//     return (
//       <div style={{height: '70%', marginTop: 150}}>
//         <div style={{
//           fontSize: 60 * document.body.clientWidth / 1679,
//           color: 'white',
//           textAlign: 'center',
//           fontFamily: 'Helvetica'
//         }}>
//           <div style={{height: 55 * document.body.clientWidth / 1679, width: 'fit-content', width: '-webkit-fit-content', marginLeft: 'auto', marginRight: 'auto'}}>
//             The brand we’ve work along with
//           </div>
//           <div style={{height: 15 * document.body.clientWidth / 1679, width: 1075 * document.body.clientWidth / 1679, backgroundColor: '#FFE300', marginLeft: 'auto', marginRight: 'auto'}} />
//         </div>
//         <div style={{width: '70%', height: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '5%'}}>
//           <div style={rowStyle}>
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-1.png)', backgroundSize: '55.40% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-2.png)', backgroundSize: '80% 33.33%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/104.png)', backgroundSize: '80% 30.60%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-9.png)', backgroundSize: '80% 62.39%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-7.png)', backgroundSize: '80% 36.11%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//           </div>
//           <div style={rowStyle}>
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-5.png)', backgroundSize: '80% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-6.png)', backgroundSize: '80% 24.63%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-8.png)', backgroundSize: '73.3% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-3.png)', backgroundSize: '80% 70.18%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/5-01.png)', backgroundSize: '160% 160%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//           </div>
//           <div style={rowStyle}>
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-10.png)', backgroundSize: '80% 29.64%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-11.png)', backgroundSize: '80% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-12.png)', backgroundSize: '100% 100%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-4.png)', backgroundSize: '80% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-13.png)', backgroundSize: '80% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
//
// class Page3 extends Component {
//   constructor() {
//     super()
//   }
//   render() {
//     return (
//       <div style={{marginTop: '150px', height: '55%', width: '100%', paddingTop: '5%'}}>
//         <div style={{
//           marginLeft: '10%',
//           fontSize: 50,
//           fontFamily: 'Helvetica',
//           width: 'fit-content', width: '-webkit-fit-content'
//         }}>
//           <div style={{width: 'fit-content', width: '-webkit-fit-content', height: 30}}>This is what we do</div>
//           <div style={{width: '100%', height: 15, background: '#FFE300'}}></div>
//         </div>
//         <div style={{
//           marginLeft: '10%',
//           marginTop: '3%',
//           fontSize: 14,
//           fontFamily: 'Helvetica'
//         }}>
//           一家小，而美的品牌策划公司。<br />
//           专业领域包括:消费者洞察、市场分析、品牌战略、品牌策划、视觉设计、活动策划、广告创意、<br />
//           运营推广以咨询、品牌、设计、广告、投资的多方复合背景，为客户提供「有创意」且「有实效」的专业服务。<br />
//         </div>
//         <div style={{
//           marginLeft: '10%',
//           marginTop: '3%',
//           fontSize: 14,
//           fontFamily: 'Helvetica'
//         }}>
//           一家小，而美的品牌策划公司。<br />
//           专业领域包括:消费者洞察、市场分析、品牌战略、品牌策划、视觉设计、活动策划、广告创意、<br />
//           运营推广以咨询、品牌、设计、广告、投资的多方复合背景，为客户提供「有创意」且「有实效」的专业服务。<br />
//         </div>
//       </div>
//     )
//   }
// }


class Page5 extends Component {
  constructor() {
    super()
    this.state = {
      height: 0
    }
  }

  handleResize(event) {
    event.preventDefault();
    this.setState({
      height: window.screen.availHeight * 0.7 * document.body.clientWidth / window.screen.availWidth
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
    this.setState({
      height: window.screen.availHeight * 0.7 * document.body.clientWidth / window.screen.availWidth
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  render() {
    const rowStyle= {width: '100%', display: 'table', height: '33.3%'}
    return (
      <div style={{height: this.state.height, marginTop: 200}}>
        <div style={{
          fontSize: 44 * document.body.clientWidth / window.screen.width,
          textAlign: 'center',
          color: '#333333',
          fontFamily: "PingFangSC-Light",
          width: 'fit-content',
          width: '-webkit-fit-content',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <div style={{height: 30 * document.body.clientWidth / window.screen.width, width: 'fit-content', width: '-webkit-fit-content', marginLeft: 'auto', marginRight: 'auto'}}>
            The brand we’ve worked along with
          </div>
          <div style={{height: 16 * document.body.clientWidth / window.screen.width, width: '102%', backgroundColor: '#FFE300', marginTop:10, marginLeft: '-1%', marginRight: 'auto'}} />
        </div>
        <div style={{
          width: '70%',
          height: '70%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '5%',
          backgroundImage: 'url(/image/4-021.png)',
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }} />
      </div>
    )
  }
}

export class Page1 extends Component {
  constructor() {
    super()
    this.state = {
      line1: 0,
      line2: 0,
      maxWidth: 0,
      height: 0,
      marginBottom: -400
    }
  }


  render() {
    return (
      <div style={{position:'relative', overflow: 'hidden', height: '100%', minWidth: 'fit-content', minWidth: '-webkit-fit-content', width: '100%'}}>
        <video poster="/image/empty.png"  autoPlay loop
            style={{position:'absolute',left:'5.04vw',top:'10vh',zIndex:-10,width: '50.6vw', maxWidth:'80vh'}}>
            <source src="/image/final_1.mp4" type="video/mp4" />
        </video>

        <br />
        <div style={{color: '#333333',
                  fontFamily: "PingFangSC-Ultralight",
                  fontSize: '1.4vw',
                  textAlign: 'right',
                  position: 'absolute',
                  right: '5.16vw',
                  top: '30vh'
                }}>
          <br />
          基于广告、战略咨询、金融、创业的复合背景
          <br />
          <br />
          我们为品牌创立、品牌转型、品牌升级
          <br />
          <br />
          提供既科学又有创造力的
          <br />
          完美解决方案
          <br />
          <div style={{float: 'right', width: '29vw', marginTop:'5vh'}}>
            <img src="/image/title_SB_cn.png"
              onMouseMove={() => {this.setState({ line1: '31vw', line2: '37vw'})}}
              onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
              style={{opacity: 0.9, width: '29vw'}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '1vw',
              marginLeft: '-1vw',
              width: this.state.line1,
              transition: "all 0.5s linear",
              marginTop: '-1vw'
            }} />
          </div>
          <br />
          <div style={{float: 'right', width: '35vw', marginTop: 10}}>
            <img src="/image/title_SB_en.png"
              onMouseMove={() => {this.setState({ line1: '31vw', line2: '37vw'})}}
              onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
              style={{opacity: 0.9, width: '35vw'}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '1vw',
              marginLeft: '-1vw',
              width: this.state.line2,
              transition: "all 0.5s linear",
              marginTop: '-1vw'
            }} />
          </div>
        </div>
      </div>
    )
  }
}

export class Page2 extends Component {
  constructor() {
    super()
    this.state = {
      line1: 0,
      line2: 0,
      maxWidth: 0,
      height: 0,
      marginBottom: -430
    }
  }

  render() {
    return (
      <div style={{position:'relative', overflow: 'hidden', height: '100%', minWidth: 'fit-content', minWidth: '-webkit-fit-content', width: '100%'}}>
        <video poster="/image/empty.png"  autoPlay loop
            style={{position:'absolute',right:'3.63vw',top:'10vh',zIndex:-10,width: '45.32vw', maxWidth:'80vh'}}>
            <source src="/image/final_2.mp4" type="video/mp4" />
        </video>
        <br />
        <div style={{color: '#333333',
                  fontFamily: "PingFangSC-Ultralight",
                  fontSize: '1.4vw',
                  textAlign: 'left',
                  position: 'absolute',
                  left: '6.16vw',
                  top: '30vh'
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
          <div style={{float: 'left', width: '29vw', marginTop:'5vh'}}>
            <img src="/image/title_CPD_cn.png"
              onMouseMove={() => {this.setState({ line1: '31vw', line2: '47vw'})}}
              onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
              style={{opacity: 0.9, width: '29vw'}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '1vw',
              marginLeft: '-1vw',
              width: this.state.line1,
              transition: "all 0.5s linear",
              marginTop: '-1vw'
            }} />
          </div>
          <br />
          <div style={{float: 'left', width: '45vw', marginTop: 20}}>
            <img src="/image/title_CPD_en.png"
              onMouseMove={() => {this.setState({ line1: '31vw', line2: '47vw'})}}
              onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
              style={{opacity: 0.9, width: '45vw'}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '1vw',
              marginLeft: '-1vw',
              width: this.state.line2,
              transition: "all 0.5s linear",
              marginTop: '-1vw'
            }} />
          </div>
        </div>
      </div>
    )
  }
}

export class Page3 extends Component {
  constructor() {
    super()
    this.state = {
      line1: 0,
      line2: 0,
      maxWidth: 0,
      height: 0,
      marginBottom: -430
    }
  }

  render() {
    return (
      <div style={{position:'relative', overflow: 'hidden', height: '100%', minWidth: 'fit-content', minWidth: '-webkit-fit-content', width: '100%'}}>
         <video poster="/image/empty.png"  autoPlay loop
             style={{position:'absolute',left:'6.51vw',top:'10vh',zIndex:-10,width: '44.32vw', maxWidth:'80vh'}}>
             <source src="/image/final_3.mp4" type="video/mp4" />
         </video>
         <br />
         <div style={{color: '#333333',
                   fontFamily: "PingFangSC-Ultralight",
                   fontSize: '1.4vw',
                   textAlign: 'right',
                   position: 'absolute',
                   right: '6.16vw',
                   top: '20vh'
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
          将一切好的立意
          <br />
          变成实在的效益
          <br />
          <br />
          并且共同承担风险收益
          <br />
          <div style={{float: 'right', width: '32vw', marginTop:'5vh'}}>
            <img src="/image/title_SMS_cn.png"
              onMouseMove={() => {this.setState({ line1: '34vw', line2: '47vw'})}}
              onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
              style={{opacity: 0.9, width: '32vw'}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '1vw',
              marginLeft: '-1vw',
              width: this.state.line1,
              transition: "all 0.5s linear",
              marginTop: '-1vw'
            }} />
          </div>
          <br />
          <div style={{float: 'right', width: '45vw', marginTop: 20}}>
            <img src="/image/title_SMS_en.png"
              onMouseMove={() => {this.setState({ line1: '34vw', line2: '47vw'})}}
              onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
              style={{opacity: 0.9, width: '45vw'}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '1vw',
              marginLeft: '-1vw',
              width: this.state.line2,
              transition: "all 0.5s linear",
              marginTop: '-1vw'
            }} />
          </div>
        </div>
      </div>
    )
  }
}

export class Page4 extends Component {
  constructor() {
    super()
    this.state = {
      line1: 0,
      line2: 0,
      maxWidth: 0,
      height: 0,
      marginBottom: -472
    }
  }

  render() {
    return (
      <div style={{position:'relative', overflow: 'hidden', height: '100%', minWidth: 'fit-content', minWidth: '-webkit-fit-content', width: '100%'}}>
        <video poster="/image/empty.png"  autoPlay loop
            style={{position:'absolute',right:'8.63vw',top:'5vh',zIndex:-10,width: '48.32vw', maxWidth:'80vh'}}>
            <source src="/image/final_4.mp4" type="video/mp4" />
        </video>
        <br />
        <div style={{color: '#333333',
                  fontFamily: "PingFangSC-Ultralight",
                  fontSize: '1.4vw',
                  textAlign: 'left',
                  position: 'absolute',
                  left: '6.16vw',
                  top: '20vh'
                }}>
          “文案日成堆
          <br />
          愁眉展不开……”
          <br />
          小编抱怨道，顺便想卖弄一波文才
          <br />
          <br />
          我们却回答：
          <br />
          “成堆是谁？”
          <br />
          <br />
          有个资历颇深的砖家说过：
          <br />
          “抓住年轻人，才能抓住新市场
          <br />
          懂得骚浪贱，才能抓住年轻人”
          <br />
          <br />
          大概说的，就是我司。
          <br />
          <div style={{float: 'left', width: '24vw', marginTop:'5vh'}}>
            <img src="/image/title_SM_cn.png"
              onMouseMove={() => {this.setState({ line1: '26vw', line2: '26vw'})}}
              onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
              style={{opacity: 0.9, width: '24vw'}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '1vw',
              marginLeft: '-1vw',
              width: this.state.line1,
              transition: "all 0.5s linear",
              marginTop: '-1vw'
            }} />
          </div>
          <br />
          <div style={{float: 'left', width: '24vw', marginTop: 20}}>
            <img src="/image/title_SM_en.png"
              onMouseMove={() => {this.setState({ line1: '26vw', line2: '26vw'})}}
              onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
              style={{opacity: 0.9, width: '24vw'}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '1vw',
              marginLeft: '-1vw',
              width: this.state.line2,
              transition: "all 0.5s linear",
              marginTop: '-1vw'
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
    this.state = {
      current: 0,
    }
  }
  mapAnchors() {
    let r = []
    for(let i = 1; i <= 5; ++i) {
      r = r.concat(['section' + i])
    }
    return r
  }
  componentDidMount() {
    this.state.current = 0
    browserHistory.push('/about#section1')
    console.log(browserHistory)
  }
  render() {
    let options = {
      activeClass:          'active',
      anchors:              this.mapAnchors(),
      arrowNavigation:      true,
      className:            'SectionContainer',
      delay:                1500,
      navigation:           false,
      scrollBar:            false,
      sectionClassName:     'Section',
      sectionPaddingTop:    '0',
      sectionPaddingBottom: '0',
      verticalAlign:        false,
    }

    const {current} = this.state

    return (
      <Animation name="slideInUp" duration="1.5s">
        <SectionsContainer {...options} activeSection={current}>
          <Section><Page1 /></Section>
          <Section><Page2 /></Section>
          <Section><Page3 /></Section>
          <Section><Page4 /></Section>
          <Section><Page5 /></Section>
        </SectionsContainer>
      </Animation>
    )
  }
}
