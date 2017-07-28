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

class Page1 extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div style={{marginTop: '150px'}}>
        <div style={{textAlign: 'center', fontFamily: 'Helvetica', height: 20, fontSize: 30, marginTop: '25%'}}>
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
        <Footer isAddress={true} />
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
      <div style={{marginTop: '150px'}}>
        <div style={{textAlign: 'center', fontSize: 14, fontFamily: 'Helvetica', marginBottom: 100}}>Made by 小的企划</div>
        <div style={{textAlign: 'center', fontSize: 40, fontFamily: 'Helvetica'}}>
          <div style={{height: 50, marginLeft: 'auto', marginRight: 'auto', width: 960}}>
            <div style={{height: 30}}>AWW / Zai Mei Jian在梅间 / Mei Xiao Cong梅小聪</div>
            <div style={{height: 20, width: 120, background: '#FFE300'}} />
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
      <div style={{marginTop: '150px'}}>
        <div style={{textAlign: 'center', fontSize: 14, fontFamily: 'Helvetica', marginBottom: 100}}>Made by 小的企划</div>
        <div style={{textAlign: 'center', fontSize: 40, fontFamily: 'Helvetica'}}>
          <div style={{height: 50, marginLeft: 'auto', marginRight: 'auto', width: 960}}>
            <div style={{height: 30}}>AWW / Zai Mei Jian在梅间 / Mei Xiao Cong梅小聪</div>
            <div style={{height: 20, width: 440, background: '#FFE300', marginLeft: 530}} />
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
      <div style={{marginTop: '150px'}}>
        <div style={{textAlign: 'center', fontSize: 14, fontFamily: 'Helvetica', marginBottom: 100}}>Made by 小的企划</div>
        <div style={{textAlign: 'center', fontSize: 40, fontFamily: 'Helvetica'}}>
          <div>
            AWW / Zai Mei Jian在梅间 / Mei Xiao Cong梅小聪
          </div>
          <div>
            / muse de patisserie / Lara Bohinc / Something Market 有眼
          </div>
          <div style={{height: 50, marginLeft: 'auto', marginRight: 'auto', width: 960}}>
            <div style={{height: 30}}>Bayr / Roundabout / Tabao maker festival 造物节</div>
            <div style={{height: 20, width: 255, background: '#FFE300', marginLeft: 125}} />
          </div>
        </div>
        <div style={{marginBottom: '20%'}} />
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
      <div style={{marginTop: '150px'}}>
        <div style={{textAlign: 'center', fontSize: 14, fontFamily: 'Helvetica'}}>Made by 小的企划</div>
        <div style={{
          width: 1200,
          height: 600,
          textAlign: 'center',
          fontSize: 40,
          fontFamily: 'Helvetica',
          backgroundImage: 'url(/image/1-2.jpg)',
          backgroundSize: '800px 500px',
          backgroundPosition: '50% 0%',
          backgroundRepeat: 'no-repeat',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingTop: 50,
          marginTop: 30
        }}>
          <div style={{height: 50, marginLeft: 'auto', marginRight: 'auto', width: 960}}>
            <div style={{height: 30}}>AWW / Zai Mei Jian在梅间 / Mei Xiao Cong梅小聪</div>
            <div style={{height: 20, width: 360, background: '#FFE300', marginLeft: 150}}></div>
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
      <div style={{marginTop: '150px'}}>
        <div style={{textAlign: 'center', fontSize: 14, fontFamily: 'Helvetica', marginBottom: 100}}>Made by 小的企划</div>
        <div style={{textAlign: 'center', fontSize: 40, fontFamily: 'Helvetica'}}>
          <div>
            AWW / Zai Mei Jian在梅间 / Mei Xiao Cong梅小聪
          </div>
          <div style={{height: 50, marginLeft: 'auto', marginRight: 'auto', width: 1200}}>
            <div style={{height: 30}}>/ muse de patisserie / Lara Bohinc / Something Market 有眼</div>
            <div style={{height: 20, width: 245, background: '#FFE300', marginLeft: 450}} />
          </div>
          <div>
            Bayr / Roundabout / Tabao maker festival 造物节
          </div>
        </div>
        <div style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          width: 400,
          height: 400,
          backgroundImage: 'url(/image/computer.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '400px 400px'
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
      <div style={{marginTop: '150px'}}>
        <div style={{textAlign: 'center', fontSize: 14, fontFamily: 'Helvetica', marginBottom: 100}}>Made by 小的企划</div>
        <div style={{textAlign: 'center', fontSize: 40, fontFamily: 'Helvetica'}}>
          <div>
            AWW / Zai Mei Jian在梅间 / Mei Xiao Cong梅小聪
          </div>
          <div>
            / muse de patisserie / Lara Bohinc / Something Market 有眼
          </div>
          <div style={{height: 50, marginLeft: 'auto', marginRight: 'auto', width: 960}}>
            <div style={{height: 30}}>Bayr / Roundabout / Tabao maker festival 造物节</div>
            <div style={{height: 20, width: 545, background: '#FFE300', marginLeft: 415}} />
          </div>
        </div>
        <div style={{marginBottom: '20%'}} />
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
      <div style={{marginTop: '150px'}}>
        <div style={{textAlign: 'center', fontSize: 14, fontFamily: 'Helvetica'}}>Made by 小的企划</div>
        <div style={{
          textAlign: 'center',
          fontSize: 40,
          fontFamily: 'Helvetica',
          width: 1200,
          height: 500,
          backgroundImage: 'url(/image/2027060392.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 0',
          backgroundSize: '1200px 800px',
          paddingTop: 300,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: -150
        }}>
          <div>
            AWW / Zai Mei Jian在梅间 / Mei Xiao Cong梅小聪
          </div>
          <div style={{height: 50, marginLeft: 'auto', marginRight: 'auto', width: 1200}}>
            <div style={{height: 30}}>/ muse de patisserie / Lara Bohinc / Something Market 有眼</div>
            <div style={{height: 20, width: 395, background: '#FFE300', marginLeft: 30}} />
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
      <div style={{marginTop: '150px'}}>
        <div style={{textAlign: 'center', fontSize: 14, fontFamily: 'Helvetica', marginBottom: 100}}>Made by 小的企划</div>
        <div style={{textAlign: 'center', fontSize: 40, fontFamily: 'Helvetica'}}>
          <div>
            AWW / Zai Mei Jian在梅间 / Mei Xiao Cong梅小聪
          </div>
          <div>
            / muse de patisserie / Lara Bohinc / Something Market 有眼
          </div>
          <div style={{height: 50, marginLeft: 'auto', marginRight: 'auto', width: 960}}>
            <div style={{height: 30}}>Bayr / Roundabout / Tabao maker festival 造物节</div>
            <div style={{height: 20, width: 95, background: '#FFE300'}} />
          </div>
        </div>
        <div style={{marginBottom: '20%'}} />
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
      <div style={{marginTop: '150px'}}>
        <div style={{textAlign: 'center', fontSize: 14, fontFamily: 'Helvetica', marginBottom: 100}}>Made by 小的企划</div>
        <div style={{textAlign: 'center', fontSize: 40, fontFamily: 'Helvetica'}}>
          <div>
            AWW / Zai Mei Jian在梅间 / Mei Xiao Cong梅小聪
          </div>
          <div style={{height: 50, marginLeft: 'auto', marginRight: 'auto', width: 1200}}>
            <div style={{height: 30}}>/ muse de patisserie / Lara Bohinc / Something Market 有眼</div>
            <div style={{height: 20, width: 475, background: '#FFE300', marginLeft: 725}} />
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

export default class extends Component {
  constructor() {
    super()
  }
  mapAnchors() {
    let r = []
    for(let i = 1; i <= 15; ++i) {
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
          <Section><Page8 /></Section>
        </SectionsContainer>
      </Animation>
    )
  }
}
