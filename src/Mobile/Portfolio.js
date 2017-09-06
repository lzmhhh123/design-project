import React, {Component} from 'react'
import {Animation} from 'styled-animation'
import { SectionsContainer, Section } from 'react-fullpage'
import {browserHistory} from 'react-router'
import '../css/index.css'
import empty from '../image/empty.png'
import i11 from '../image/title_SB_cn.png'
import i12 from '../image/title_SB_en.png'
import i21 from '../image/title_CPD_cn.png'
import i22 from '../image/title_CPD_en.png'
import i31 from '../image/title_SMS_cn.png'
import i32 from '../image/title_SMS_en.png'
import i41 from '../image/title_SM_cn.png'
import i42 from '../image/title_SM_en.png'

import ii from '../image/mobile-label.jpg'
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
      width: 0
    }
  }
  handleResize(event) {
    event.preventDefault();
    let width = document.body.clientWidth * 0.8;
    this.setState({
      width: parseInt(width / 50, 10) * 50
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
    let width = document.body.clientWidth * 0.8;
    this.setState({
      width: parseInt(width / 50, 10) * 50
    })
  }

  render() {
    return (
      <div style={{height: '85%', marginTop: '10vh', marginLeft: 'auto', marginRight: 'auto', textAlign:'center'}}>
          <div style={{width:'92vw',maxWidth:'60vh',display:'inline-block', position:'relative'}}>
            <video ref="video" poster={empty}  autoPlay muted loop playsInline style={{margin:'-1px',width:'100%'}}>
              <source src="/image/final_1.mp4" type="video/mp4" />
            </video>
            <div  ref="box" style={{zIndex:100,position:'absolute', boxSizing:'border-box', border:'2px solid #F2F2F2',left:'-1px',top:'-1px', width:'calc(100% + 2px)',height:'calc(100% - 2px)'}}></div>
          </div>
        <br />
        <div style={{color: '#000000',
                  fontFamily: "PingFangSC-Ultralight",
                  fontSize: '3.5vw',
                  marginTop: '5vh',
                  textAlign: 'center',
                  position: 'relative',
                }}>
          基于广告、战略咨询、金融、创业的复合背景
          <br />
          我们为品牌创立、品牌转型、品牌升级
          <br />
          提供既科学又有创造力的
          <br />
          完美解决方案
          <br />
          <br />
          <div style={{marginLeft: '25%', marginRight: '25%'}}>
            <img src={i11}
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
            <img src={i12}
              style={{marginTop:'-2.5vh',opacity: 0.9, width:'100%', height: 'auto'}}
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
      width: 0
    }
  }
  handleResize(event) {
    event.preventDefault();
    let width = document.body.clientWidth * 0.8;
    this.setState({
      width: parseInt(width / 50, 10) * 50
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
    let width = document.body.clientWidth * 0.8;
    this.setState({
      width: parseInt(width / 50, 10) * 50
    })
  }
  render() {
    return (
      <div className="right" style={{height: '85%', marginTop: '12vh', width: '100%', textAlign:'center'}}>
          <div style={{width:'85vw',maxWidth:'54vh', display:'inline-block', position:'relative'}}>
            <video  ref="video" poster={empty}  autoPlay muted loop playsInline style={{WebkitTransformStyle: 'preserve-3d',transformStyle:'preserve-3d',margin:'-1px',width:'100%'}}>
              <source src="/image/final_2.mp4" type="video/mp4" />
            </video>
            <div ref = "box" style={{zIndex:100,position:'absolute', boxSizing:'border-box', border:'2px solid #F2F2F2',left:'-1px',top:'-1px', width:'calc(100% + 2px)',height:'calc(100% - 2px)'}}></div>
          </div>
        <br />
        <div style={{color: '#000000',
                  fontFamily: "PingFangSC-Ultralight",
                  fontSize: '3.3vw',
                  marginTop: '6vh',
                  textAlign: 'center',
                  position: 'relative',
                }}>

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
            <img src={i21}
              style={{opacity: 0.9, width:'100%', height: 'auto'}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '10px',
              width: this.state.line1,
              transition: "all 0.5s linear",
              transitionDelay: '2s',
              marginTop: '-5px',
              marginLeft: '-3%'
            }} />
          </div>
          <br />
          <div style={{marginLeft: '5%', marginRight: '5%'}}>
            <img src={i22}
              style={{marginTop:'-2vh',opacity: 0.9, width:'100%', height: 'auto'}}
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
      width: 0
    }
  }
  handleResize(event) {
    event.preventDefault();
    let width = document.body.clientWidth * 0.8;
    this.setState({
      width: parseInt(width / 50, 10) * 50
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
    let width = document.body.clientWidth * 0.8;
    this.setState({
      width: parseInt(width / 50, 10) * 50
    })
  }
  render() {
    return (
      <div style={{height: '85%', marginTop: '10vh', width: '100%', textAlign:'center'}}>
      <div style={{width:'85vw',maxWidth:'50vh',display:'inline-block', position:'relative'}}>
        <video  ref="video" poster={empty}  autoPlay muted loop playsInline style={{margin:'-1px',width:'100%'}}>
          <source src="/image/final_3.mp4" type="video/mp4" />
        </video>
        <div  ref="box" style={{zIndex:100,position:'absolute', boxSizing:'border-box', border:'2px solid #F2F2F2',left:'-1px',top:'-1px', width:'calc(100% + 2px)',height:'calc(100% - 2px)'}}></div>
      </div>
        <div style={{color: '#000000',
                  fontFamily: "PingFangSC-Ultralight",
                  fontSize: '3.3vw',
                  textAlign: 'center',
                  marginTop: '5vh',
                  position: 'relative'
                }}>
          我们坚信有趣就是生产力的一部分
          <br />
          另一部分是不可描述的精耕细作
          <br />
          我们与客户深入合作
          <br />
          将一切好的立意变成实在的效益,并且共同承担风险收益
          <br />
          <br />
          <div style={{marginLeft: '21%', marginRight: '21%'}}>
            <img src={i31}
              style={{opacity: 0.9, width:'100%', height: 'auto'}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '10px',
              width: this.state.line1,
              transition: "all 0.5s linear",
              transitionDelay: '2s',
              marginTop: '-10px',
              marginLeft: '-3%'
            }} />
          </div>
          <br />
          <div style={{marginLeft: '5%', marginRight: '5%'}}>
            <img src={i32}
              style={{marginTop:'-2vh',opacity: 0.9, width:'100%', height: 'auto'}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '10px',
              width: this.state.line2,
              transition: "all 0.5s linear",
              transitionDelay: '2s',
              marginTop: '-20px',
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
      width: 0
    }
  }
  handleResize(event) {
    event.preventDefault();
    let width = document.body.clientWidth * 0.8;
    this.setState({
      width: parseInt(width / 50, 10) * 50
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
    let width = document.body.clientWidth * 0.8;
    this.setState({
      width: parseInt(width / 50, 10) * 50
    })
  }

  render() {
    return (
      <div className="right" style={{height: '85%', marginTop: '20px', textAlign:'center'}}>
      <div style={{width:'84vw',maxWidth:'55vh',display:'inline-block', position:'relative'}}>
        <video ref="video" poster={empty}  autoPlay muted loop playsInline style={{margin:'-1px',width:'100%'}}>
          <source src="/image/final_4.mp4" type="video/mp4" />
        </video>
        <div ref="box" style={{zIndex:100,position:'absolute', boxSizing:'border-box', border:'2px solid #F2F2F2',left:'-1px',top:'-1px', width:'calc(100% + 2px)',height:'calc(100% - 2px)'}}></div>
      </div>
        <br />
        <div style={{color: '#000000',
                  fontFamily: "PingFangSC-Ultralight",
                  fontSize: '3.3vw',
                  marginTop: '5vh',
                  textAlign: 'center',
                  position: 'relative',
                }}>
          “文案日成堆，愁眉展不开……”小编抱怨道，
          <br />
          我们却回答：“成堆是谁？”
          <br />
          有个资历颇深的砖家说过：“抓住年轻人，才能抓住新市场
          <br />
          懂得骚浪贱，才能抓住年轻人”大概说的，就是我司。
          <br />
          <br />
          <div style={{marginLeft: '26%', marginRight: '26%'}}>
            <img src={i41}
              style={{opacity: 0.9, width:'100%', height: 'auto'}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '10px',
              width: this.state.line1,
              transition: "all 0.5s linear",
              transitionDelay: '2s',
              marginTop: '-10px',
              marginLeft: '-3%'
            }} />
          </div>
          <br />
          <div style={{marginLeft: '26%', marginRight: '26%'}}>
            <img src={i42}
              style={{marginTop:'-1vh',opacity: 0.9, width:'100%', height: 'auto'}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '10px',
              width: this.state.line2,
              transition: "all 0.5s linear",
              transitionDelay: '2s',
              marginTop: '-5px',
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
      <div style={{textAlign:'center'}}>
        <img src={ii} style={{
          width:'100vw',
          maxWidth: '65vh',
          marginTop: '7vh'
        }}/>
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
    this.update = this.update.bind(this)
    if(window.location.hash !== '#section1') {
      browserHistory.push('/about#section1')
      window.location.reload()
    }
  }
  mapAnchors() {
    let r = []
    for(let i = 1; i <= 5; ++i) {
      r = r.concat(['section' + i])
    }
    return r
  }
  componentDidMount(){
    setTimeout(() => {this.update()},100)
  }
  update() {
    if (!this.aboutLogo)
      this.aboutLogo = document.getElementsByClassName("aboutLogo")
    if (!this.portfolioLogo)
      this.portfolioLogo = document.getElementsByClassName("portfolioLogo")
    if (!this.contactLogo)
      this.contactLogo = document.getElementsByClassName("contactLogo")
    if (!this.logoAll)
      this.logoAll = document.getElementsByClassName("logoAll")
    if(this.state.current == 0) {
      this.contactLogo[0].style.marginRight = "-201px"
      this.aboutLogo[0].style.marginRight = "81px"
      this.portfolioLogo[0].style.marginRight = "-201px"
      this.logoAll[0].style.marginLeft = '-7px'
      this.setState({current: 1})
    }
    else {
      this.contactLogo[0].style.marginRight = "-200px"
      this.aboutLogo[0].style.marginRight = "80px"
      this.portfolioLogo[0].style.marginRight = "-200px"
      this.logoAll[0].style.marginLeft = "-6px"
      this.setState({current: 0})
    }
  }
  render() {
    let options = {
      activeClass:          'active',
      anchors:              this.mapAnchors(),
      arrowNavigation:      true,
      className:            'SectionContainer',
      delay:                300,
      navigation:           false,
      scrollBar:            false,
      sectionClassName:     'Section',
      sectionPaddingTop:    '0',
      sectionPaddingBottom: '0',
      verticalAlign:        false,
      scrollCallback:       this.update
    }
    return (
      <Animation name="slideInUp" duration="0.5s">
        <SectionsContainer {...options}>
          <Section><Page4 /></Section>
          <Section><Page5 /></Section>
        </SectionsContainer>
      </Animation>
    )
  }
}
