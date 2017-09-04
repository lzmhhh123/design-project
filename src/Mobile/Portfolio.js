import React, {Component} from 'react'
import {Animation} from 'styled-animation'
import { SectionsContainer, Section } from 'react-fullpage'

// class Page1 extends Component {
//   constructor() {
//     super()
//   }
//   render() {
//     return (
//       <div style={{
//         height: '75%',
//         marginTop: '25%',
//         width: '100%',
//         backgroundImage: 'url(/image/number.png)',
//         backgroundSize: '80% 30%',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: '40% 40%'
//       }}>
//         <div style={{fontSize: '75%', fontFamily: 'Helvetica', width: '100%', color: 'white', display: 'table'}}>
//           <div style={{marginLeft: '8%', display: 'inline-block'}}>—OFFICE</div>
//           <div style={{marginLeft: '8%', display: 'inline-block'}}>—PEOPLE</div>
//           <div style={{marginLeft: '12%', display: 'inline-block'}}>—PROJECT</div>
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
//     const rowStyle= {width: '100%', display: 'table', height: '30%'}
//     return (
//       <div style={{height: '75%', marginTop: '25%'}}>
//         <div style={{
//           fontSize: '150%',
//           color: 'white',
//           textAlign: 'center',
//           fontFamily: 'Helvetica'
//         }}>
//           <div style={{height: 17, width: 'fit-content', width: '-webkit-fit-content', marginLeft: 'auto', marginRight: 'auto'}}>
//             The brand we’ve work along with
//           </div>
//           <div style={{height: 8, width: 285, backgroundColor: '#FFE300', marginLeft: 'auto', marginRight: 'auto'}} />
//         </div>
//         <div style={{width: '80%', height: '60%', marginLeft: 'auto', marginRight: 'auto', marginTop: '5%'}}>
//           <div style={rowStyle}>
//             <div style={{width: '33.3%', height: '100%', backgroundImage: 'url(/image/1-1.png)', backgroundSize: '55.40% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '33.3%', height: '100%', backgroundImage: 'url(/image/1-2.png)', backgroundSize: '80% 33.33%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '33.3%', height: '100%', backgroundImage: 'url(/image/104.png)', backgroundSize: '80% 30.80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//           </div>
//           <div style={rowStyle}>
//             <div style={{width: '33.3%', height: '100%', backgroundImage: 'url(/image/1-9.png)', backgroundSize: '80% 62.39%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '33.3%', height: '100%', backgroundImage: 'url(/image/1-7.png)', backgroundSize: '80% 36.11%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '33.3%', height: '100%', backgroundImage: 'url(/image/1-5.png)', backgroundSize: '80% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//           </div>
//           <div style={rowStyle}>
//             <div style={{width: '33.3%', height: '100%', backgroundImage: 'url(/image/1-6.png)', backgroundSize: '80% 24.63%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '33.3%', height: '100%', backgroundImage: 'url(/image/1-8.png)', backgroundSize: '73.3% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '33.3%', height: '100%', backgroundImage: 'url(/image/1-3.png)', backgroundSize: '80% 70.18%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//           </div>
//           <div style={rowStyle}>
//             <div style={{width: '33.3%', height: '100%', backgroundImage: 'url(/image/5-01.png)', backgroundSize: '160% 160%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '33.3%', height: '100%', backgroundImage: 'url(/image/1-10.png)', backgroundSize: '80% 29.64%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '33.3%', height: '100%', backgroundImage: 'url(/image/1-11.png)', backgroundSize: '80% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//           </div>
//           <div style={rowStyle}>
//             <div style={{width: '33.3%', height: '100%', backgroundImage: 'url(/image/1-12.png)', backgroundSize: '100% 100%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '33.3%', height: '100%', backgroundImage: 'url(/image/1-4.png)', backgroundSize: '80% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '33.3%', height: '100%', backgroundImage: 'url(/image/1-13.png)', backgroundSize: '80% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
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
//       <div style={{height: '85%', marginTop: '15%', marginLeft: '8%'}}>
//         <div style={{
//           marginTop: '25%',
//           fontFamily: 'Helvetica',
//           fontSize: '170%',
//           width: 'fit-content',
//           width: '-webkit-fit-content'
//         }}>
//           <div style={{height: 16, width: 'fit-content', width: '-webkit-fit-content'}}>This is what we do</div>
//           <div style={{width: '105%', height: 8, background: '#FFE300' }}></div>
//         </div>
//         <div style={{
//           marginTop: '20%',
//           fontSize: '80%',
//           fontFamily: 'Helvetica'
//         }}>
//           小的企划 —— 一间小而美的广告公司， <br /><br />
//           立志于解决一个没什么人想解决的问题: <br /><br />
//           “如何给小公司做小预算的品牌营销，用100万做出1个亿 <br /><br />
//           的效果?”。 <br /><br />
//           在“消费升级、地产革新、实体店重生”的市场背景下， <br /><br />
//           我们志在成为新商业领域的品牌营销专家。
//         </div>
//         <div style={{height: '10%'}}/>
//       </div>
//     )
//   }
// }

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
      <div style={{height: '85%', marginTop: 65, marginLeft: 'auto', marginRight: 'auto', textAlign:'center'}}>
        <video autoPlay muted loop playsInline 
            style={{marginLeft:'5%', marginRight:'5%',marginTop:'-30px',marginBottom:'-30px',width:'90%', maxWidth:'600px'}}>
            <source src="/image/preview_1.mp4" type="video/mp4" />
        </video>
        <br />
        <div style={{color: '#666666',
                  fontFamily: "PingFangSC-Light",
                  fontSize: '1.3em',
                  textAlign: 'center',
                  position: 'relative',
                }}>
          <br />
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
          <div style={{marginLeft: '25%', marginRight: '25%'}}>
            <img src="/image/title_SB_cn.png"
              style={{opacity: 0.9, width:'100%', height: 'auto'}}
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
              style={{opacity: 0.9, width:'100%', height: 'auto'}}
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
      <div className="right" style={{height: '85%', marginTop: 65, width: '100%', textAlign:'center'}}>
        <video autoPlay muted loop playsInline
            style={{marginLeft:'5%', marginRight:'5%',marginTop:'-30px',marginBottom:'-30px',width:'90%', maxWidth:'600px'}}>
            <source src="/image/preview_2.mp4" type="video/mp4" />
        </video>
        <br />
        <div style={{color: '#666666',
                  fontFamily: "PingFangSC-Light",
                  fontSize: '1.3em',
                  textAlign: 'center',
                  position: 'relative',
                }}>
          <br />
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
          <br />
          <br />
          <div style={{marginLeft: '25%', marginRight: '25%'}}>
            <img src="/image/title_CPD_cn.png"
              style={{opacity: 0.9, width:'100%', height: 'auto'}}
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
              style={{opacity: 0.9, width:'100%', height: 'auto'}}
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
      <div style={{height: '85%', marginTop: 65, width: '100%', textAlign:'center'}}>
        <video autoPlay muted loop playsInline
            style={{marginLeft:'5%', marginRight:'5%',marginTop:'-30px',marginBottom:'-30px',width:'90%', maxWidth:'600px'}}>
            <source src="/image/preview_3.mp4" type="video/mp4" />
        </video>
        <div style={{color: '#666666',
                  fontFamily: "PingFangSC-Light",
                  fontSize: '1.3em',
                  textAlign: 'center',
                  position: 'relative'
                }}>
          <br />
          我们坚信 有趣就是生产力的一部分
          <br />
          <br />
          另一部分 是不可描述的精耕细作
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
          <div style={{marginLeft: '21%', marginRight: '21%'}}>
            <img src="/image/title_SMS_cn.png"
              style={{opacity: 0.9, width:'100%', height: 'auto'}}
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
              style={{opacity: 0.9, width:'100%', height: 'auto'}}
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
      <div className="right" style={{height: '85%', marginTop: '65px', textAlign:'center'}}>
        <video autoPlay muted loop playsInline
            style={{marginLeft:'5%', marginRight:'5%',marginTop:'-30px',marginBottom:'-30px',width:'90%', maxWidth:'600px'}}>
            <source src="/image/preview_4.mp4" type="video/mp4" />
        </video>
        <br />
        <div style={{color: '#666666',
                  fontFamily: "PingFangSC-Light",
                  fontSize: '1.3em',
                  textAlign: 'center',
                  position: 'relative',
                }}>
          <br />
          “文案日成堆，愁眉展不开……”
          <br />
          小编抱怨道，顺便想卖弄一波文才
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
          <div style={{marginLeft: '25%', marginRight: '25%'}}>
            <img src="/image/title_SM_cn.png"
              style={{opacity: 0.9, width:'100%', height: 'auto'}}
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
              style={{opacity: 0.9, width:'100%', height: 'auto'}}
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

class Page5 extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div style={{
        height: '85%',
        marginTop: 100,
        paddingTop: 30,
        backgroundImage: 'url(/image/mobile-label.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center 60px',
        backgroundSize: '90% auto'
      }}>
        <div style={{textAlign: 'center', width: 'fit-content', width: '-webkit-fit-content', margin: 'auto'}}>
          <div style={{height: 20, color: '#333333', fontFamily: 'PingFangSC-Light', fontSize: 24, width: 'fit-content', width: '-webkit-fit-content'}}>
            The brand we’ve worked with
          </div>
          <div style={{width: '100%', height: 12, backgroundColor: '#FFE300'}} />
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
    for(let i = 1; i <= 5; ++i) {
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
          <Section><Page3 /></Section>
          <Section><Page4 /></Section>
          <Section><Page5 /></Section>
        </SectionsContainer>
      </Animation>
    )
  }
}
