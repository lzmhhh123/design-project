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

class Page2 extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div style={{marginTop: '150px'}}>
        <div style={{textAlign: 'center', fontSize: 14, fontFamily: 'Helvetica', marginBottom: 100}}>Made by 小的企划</div>
        <div style={{textAlign: 'center', fontSize: 40, fontFamily: 'Helvetica'}}>
          <div style={{height: 50, marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', width: '-webkit-fit-content'}}>
            <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}}>AWW / Zai Mei Jian在梅间 / Mei Xiao Cong梅小聪</div>
            <div style={{height: 20, width: '12%', background: '#FFE300'}} />
          </div>
          <div>
            / muse de patisserie / Lara Bohinc / Something Market 有眼
          </div>
          <div>
            Bayr / Roundabout / Tabao maker festival 造物节
          </div>
        </div>
        <img src="/image/7.png" style={{width: '100%', marginTop: '-70', marginBottom: '-100'}}/>
        <Footer isAddress={false} />
      </div>
    )
  }
}

class Page3 extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div style={{marginTop: '150px', height: '85%'}}>
        <div style={{textAlign: 'center', fontSize: 14, fontFamily: 'Helvetica'}}>Made by 小的企划</div>
        <div style={{
          textAlign: 'center',
          fontSize: 40,
          fontFamily: 'Helvetica',
          width: 1200,
          height: '60%',
          backgroundImage: 'url(/image/head.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '0% 70%',
          backgroundSize: '400px 500px',
          paddingTop: '5%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          <div style={{height: 50, marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', width: '-webkit-fit-content'}}>
            <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}}>AWW / Zai Mei Jian在梅间 / Mei Xiao Cong梅小聪</div>
            <div style={{height: 20, width: '45%', background: '#FFE300', marginLeft: '55%'}} />
          </div>
          <div>
            / muse de patisserie / Lara Bohinc / Something Market 有眼
          </div>
          <div>
            Bayr / Roundabout / Tabao maker festival 造物节
          </div>
        </div>
        <Footer isAddress={false} />
      </div>
    )
  }
}

class Page4 extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div style={{marginTop: '150px', height: '85%'}}>
        <div style={{textAlign: 'center', fontSize: 14, fontFamily: 'Helvetica', marginBottom: 100}}>Made by 小的企划</div>
        <div style={{textAlign: 'center', fontSize: 40, fontFamily: 'Helvetica'}}>
          <div>
            AWW / Zai Mei Jian在梅间 / Mei Xiao Cong梅小聪
          </div>
          <div>
            / muse de patisserie / Lara Bohinc / Something Market 有眼
          </div>
          <div style={{height: 50, marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', width: '-webkit-fit-content'}}>
            <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}}>Bayr / Roundabout / Tabao maker festival 造物节</div>
            <div style={{height: 20, width: '26%', background: '#FFE300', marginLeft: '13%'}} />
          </div>
        </div>
        <div style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          width: 700,
          height: '40%',
          backgroundImage: 'url(/image/圆环-01.png)',
          backgroundSize: '700px 100%',
          backgroundRepeat: 'no-repeat',
          marginBottom: 10,
          marginTop: 10
        }}></div>
        <Footer isAddress={false} />
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
      <div style={{marginTop: '150px', height: '85%'}}>
        <div style={{textAlign: 'center', fontSize: 14, fontFamily: 'Helvetica'}}>Made by 小的企划</div>
        <div style={{
          width: 1200,
          height: '60%',
          textAlign: 'center',
          fontSize: 40,
          fontFamily: 'Helvetica',
          backgroundImage: 'url(/image/1-2.jpg)',
          backgroundSize: '800px 90%',
          backgroundPosition: '50% 0%',
          backgroundRepeat: 'no-repeat',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingTop: 50,
          marginTop: 30
        }}>
          <div style={{height: 50, marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', width: '-webkit-fit-content'}}>
            <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}}>AWW / Zai Mei Jian在梅间 / Mei Xiao Cong梅小聪</div>
            <div style={{height: 20, width: '38.5%', background: '#FFE300', marginLeft: '15%'}}></div>
          </div>
          <div>
            / muse de patisserie / Lara Bohinc / Something Market 有眼
          </div>
          <div>
            Bayr / Roundabout / Tabao maker festival 造物节
          </div>
        </div>
        <Footer isAddress={false} />
      </div>
    )
  }
}

class Page6 extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div style={{marginTop: '150px', height: '85%'}}>
        <div style={{textAlign: 'center', fontSize: 14, fontFamily: 'Helvetica', marginBottom: '5%'}}>Made by 小的企划</div>
        <div style={{textAlign: 'center', fontSize: 40, fontFamily: 'Helvetica'}}>
          <div>
            AWW / Zai Mei Jian在梅间 / Mei Xiao Cong梅小聪
          </div>
          <div style={{height: 50, marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', width: '-webkit-fit-content'}}>
            <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}}>/ muse de patisserie / Lara Bohinc / Something Market 有眼</div>
            <div style={{height: 20, width: '21%', background: '#FFE300', marginLeft: '37%'}} />
          </div>
          <div>
            Bayr / Roundabout / Tabao maker festival 造物节
          </div>
        </div>
        <div style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          width: 400,
          height: '50%',
          backgroundImage: 'url(/image/computer.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '400px 100%'
        }}>
        </div>
        <Footer isAddress={false} />
      </div>
    )
  }
}

class Page7 extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div style={{marginTop: '150px', height: '85%'}}>
        <div style={{textAlign: 'center', fontSize: 14, fontFamily: 'Helvetica', marginBottom: 100}}>Made by 小的企划</div>
        <div style={{
          textAlign: 'center',
          fontSize: 40,
          fontFamily: 'Helvetica',
          width: 1200,
          height: '60%',
          backgroundImage: 'url(/image/2027060392.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 0',
          backgroundSize: '1200px 800px',
          paddingTop: 300,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: -250
        }}>
          <div>
            AWW / Zai Mei Jian在梅间 / Mei Xiao Cong梅小聪
          </div>
          <div>
            / muse de patisserie / Lara Bohinc / Something Market 有眼
          </div>
          <div style={{height: 50, marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', width: '-webkit-fit-content'}}>
            <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}}>Bayr / Roundabout / Tabao maker festival 造物节</div>
            <div style={{height: 20, width: '58%', background: '#FFE300', marginLeft: '42%'}} />
          </div>
        </div>
        <Footer isAddress={false} />
      </div>
    )
  }
}

class Page8 extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div style={{marginTop: '150px', height: '85%'}}>
        <div style={{textAlign: 'center', fontSize: 14, fontFamily: 'Helvetica'}}>Made by 小的企划</div>
        <div style={{
          textAlign: 'center',
          fontSize: 40,
          fontFamily: 'Helvetica',
          width: 1200,
          height: '60%',
          backgroundImage: 'url(/image/蛋糕品牌设计-02.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '100% 30%',
          backgroundSize: '700px 83.3%',
          paddingTop: 100,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          <div>
            AWW / Zai Mei Jian在梅间 / Mei Xiao Cong梅小聪
          </div>
          <div style={{height: 50, marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', width: '-webkit-fit-content'}}>
            <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}}>/ muse de patisserie / Lara Bohinc / Something Market 有眼</div>
            <div style={{height: 20, width: '32%', background: '#FFE300', marginLeft: '2%'}} />
          </div>
          <div>
            Bayr / Roundabout / Tabao maker festival 造物节
          </div>
        </div>
        <Footer isAddress={false} />
      </div>
    )
  }
}

class Page9 extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div style={{marginTop: '150px', height: '85%'}}>
        <div style={{textAlign: 'center', fontSize: 14, fontFamily: 'Helvetica', marginBottom: 50}}>Made by 小的企划</div>
        <div style={{
          textAlign: 'center',
          fontSize: 40,
          fontFamily: 'Helvetica',
          width: 1300,
          height: '60%',
          backgroundImage: 'url(/image/Cardboard.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '100% 90%',
          backgroundSize: '600px 80%',
          paddingTop: 100,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          <div>
            AWW / Zai Mei Jian在梅间 / Mei Xiao Cong梅小聪
          </div>
          <div>
            / muse de patisserie / Lara Bohinc / Something Market 有眼
          </div>
          <div style={{height: 50, marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', width: '-webkit-fit-content'}}>
            <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}}>Bayr / Roundabout / Tabao maker festival 造物节</div>
            <div style={{height: 20, width: '10%', background: '#FFE300'}} />
          </div>
        </div>
        <Footer isAddress={false} />
      </div>
    )
  }
}

class Page10 extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div style={{marginTop: '150px', height: '85%'}}>
        <div style={{textAlign: 'center', fontSize: 14, fontFamily: 'Helvetica', marginBottom: '5%'}}>Made by 小的企划</div>
        <div style={{textAlign: 'center', fontSize: 40, fontFamily: 'Helvetica'}}>
          <div>
            AWW / Zai Mei Jian在梅间 / Mei Xiao Cong梅小聪
          </div>
          <div style={{height: 50, marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', width: '-webkit-fit-content'}}>
            <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}}>/ muse de patisserie / Lara Bohinc / Something Market 有眼</div>
            <div style={{height: 20, width: '40%', background: '#FFE300', marginLeft: '60%'}} />
          </div>
          <div>
            Bayr / Roundabout / Tabao maker festival 造物节
          </div>
        </div>
        <div style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          width: 400,
          height: '50%',
          backgroundImage: 'url(/image/eye.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '400px 100%'
        }}>
        </div>
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
    for(let i = 1; i <= 9; ++i) {
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
          <Section><Page2 /></Section>
          <Section><Page3 /></Section>
          <Section><Page4 /></Section>
          <Section><Page5 /></Section>
          <Section><Page6 /></Section>
          <Section><Page7 /></Section>
          <Section><Page8 /></Section>
          <Section><Page9 /></Section>
          <Section><Page10 /></Section>
        </SectionsContainer>
      </Animation>
    )
  }
}
