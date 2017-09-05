import React, {Component} from 'react'
import {Animation} from 'styled-animation'
import { SectionsContainer, Section } from 'react-fullpage'
import {browserHistory, Link} from 'react-router'
import axios from 'axios'

class Footer extends Component {
  constructor() {
    super()
    this.state = {
      labels: null
    }
  }
  render() {
    let { isAddress } = this.props
    if(isAddress) {
      return (
        <div style={{textAlign: 'center', fontFamily: 'Helvetica', fontSize: '70%'}}>
          media@xiaodeqihua.com<br />
          上海市 静安区 威海路696号<br />
          No.696 Weihai Road, Jing An District ,Shanghai
        </div>
      )
    }
    else {
      return (
        <div style={{textAlign: 'center', fontFamily: 'Helvetica', fontSize: '70%'}}>
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
    this.state = {
      p: [false, false, false, false, false, false, false, false, false],
      index: -1
    }
    this.view = this.view.bind(this)
  }
  view(event) {
    event.preventDefault()
    window.location.pathname = `/pdf/page${this.state.index}.pdf`
  }
  changeImage(index) {
    let { p } = this.state
    for(let i = 0; i < 9; ++i)
      p[i] = false;
    p[index] = true;
    this.setState({ p, index })
  }
  componentWillMount() {
    axios
      .post('/api/asklabel')
      .then(res => {
        res.data.labels.sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10))
        this.setState({
          labels: res.data.labels
        })
      })
  }
  renderStyle() {
    let {p} = this.state
    let s = {
      marginTop: 110,
      height: '70%'
    }
    if(p[0]) {
      s['backgroundImage'] = 'url(/image/image1.png)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '100% auto'
      s['backgroundPosition'] = '0% 90%'
    }
    else if(p[2]) {
      s['backgroundImage'] = 'url(/image/image3.png)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '50% auto'
      s['backgroundPosition'] = '0% 30%'
    }
    else if(p[6]) {
      s['backgroundImage'] = 'url(/image/image8.jpg)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '100% auto'
      s['backgroundPosition'] = '50% 85%'
    }
    else if(p[1]) {
      s['backgroundImage'] = 'url(/image/image2.jpg)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '100% auto'
      s['backgroundPosition'] = '50% 60%'
    }
    else if(p[4]) {
      s['backgroundImage'] = 'url(/image/image5.png)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '38%  auto'
      s['backgroundPosition'] = '50% 100%'
    }
    else if(p[8]) {
      s['backgroundImage'] = 'url(/image/image9.jpg)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '120%  auto'
      s['backgroundPosition'] = '50% 95%'
    }
    else if(p[3]) {
      s['backgroundImage'] = 'url(/image/image4.jpg)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '100%  auto'
      s['backgroundPosition'] = '50% 80%'
    }
    else if(p[5]) {
      s['backgroundImage'] = 'url(/image/image6.png)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '38%  auto'
      s['backgroundPosition'] = '50% 100%'
    }
    else if(p[7]) {
      s['backgroundImage'] = 'url(/image/image7.jpg)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '100%  auto'
      s['backgroundPosition'] = '50% 80%'
    }
    return s;
  }
  render() {
    let styleLineTrue = {
      height: 8,
      width: '100%',
      background: '#FFE300',
      transition: 'all 0.5s linear'
    }
    let styleLineFalse = {
      height: 8,
      width: 0,
      background: '#FFE300',
      transition: 'all 0.5s linear'
    }
    let containStyle = this.renderStyle()
    if(!this.state.labels) return <div />
    return (
      <div style={containStyle}>
        <div style={{marginTop:20, textAlign: 'center', fontSize: 16, fontFamily: 'PingFangSC-Light', height: '95%', color: '#333333'}}>
          <div style={{margin: 'auto', width: 'fit-content', width: '-webkit-fit-content'}}>
            <div style={{height: 20, width: 'fit-content', width: '-webkit-fit-content', margin: 'auto'}}>
              <div style={{height: 12, width: 'fit-content', width: '-webkit-fit-content'}} onClick={() => this.changeImage(0)}>
                {this.state.labels[0].string}
              </div>
              {this.state.p[0] ? <div style={{height: 8, width: '100%', backgroundColor: '#FFE300'}} /> : null}
            </div>
            <div style={{height: 15}} />
            <div style={{height: 20, width: 'fit-content', width: '-webkit-fit-content', margin: 'auto'}}>
              <div style={{height: 12, width: 'fit-content', width: '-webkit-fit-content'}} onClick={() => this.changeImage(1)}>
                {this.state.labels[1].string}
              </div>
              {this.state.p[1] ? <div style={{height: 8, width: '100%', backgroundColor: '#FFE300'}} /> : null}
            </div>
            <div style={{height: 15}} />
            <div style={{height: 20, width: 'fit-content', width: '-webkit-fit-content', margin: 'auto'}}>
              <div style={{height: 12, width: 'fit-content', width: '-webkit-fit-content'}} onClick={() => this.changeImage(2)}>
                {this.state.labels[2].string}
              </div>
              {this.state.p[2] ? <div style={{height: 8, width: '100%', backgroundColor: '#FFE300'}} /> : null}
            </div>
            <div style={{height: 15}} />
            <div style={{height: 20, width: 'fit-content', width: '-webkit-fit-content', margin: 'auto'}}>
              <div style={{height: 12, width: 'fit-content', width: '-webkit-fit-content'}} onClick={() => this.changeImage(3)}>
                {this.state.labels[3].string}
              </div>
              {this.state.p[3] ? <div style={{height: 8, width: '100%', backgroundColor: '#FFE300'}} /> : null}
            </div>
            <div style={{height: 15}} />
            <div style={{height: 20, width: 'fit-content', width: '-webkit-fit-content', margin: 'auto'}}>
              <div style={{height: 12, width: 'fit-content', width: '-webkit-fit-content'}} onClick={() => this.changeImage(4)}>
                {this.state.labels[4].string}
              </div>
              {this.state.p[4] ? <div style={{height: 8, width: '100%', backgroundColor: '#FFE300'}} /> : null}
            </div>
            <div style={{height: 15}} />
            <div style={{height: 20, width: 'fit-content', width: '-webkit-fit-content', margin: 'auto'}}>
              <div style={{height: 12, width: 'fit-content', width: '-webkit-fit-content'}} onClick={() => this.changeImage(5)}>
                {this.state.labels[5].string}
              </div>
              {this.state.p[5] ? <div style={{height: 8, width: '100%', backgroundColor: '#FFE300'}} /> : null}
            </div>
            <div style={{height: 15}} />
            <div style={{height: 20, width: 'fit-content', width: '-webkit-fit-content', margin: 'auto'}}>
              <div style={{height: 12, width: 'fit-content', width: '-webkit-fit-content'}} onClick={() => this.changeImage(6)}>
                {this.state.labels[6].string}
              </div>
              {this.state.p[6] ? <div style={{height: 8, width: '100%', backgroundColor: '#FFE300'}} /> : null}
            </div>
            <div style={{height: 15}} />
            <div style={{height: 20, width: 'fit-content', width: '-webkit-fit-content', margin: 'auto'}}>
              <div style={{height: 12, width: 'fit-content', width: '-webkit-fit-content'}} onClick={() => this.changeImage(7)}>
                {this.state.labels[7].string}
              </div>
              {this.state.p[7] ? <div style={{height: 8, width: '100%', backgroundColor: '#FFE300'}} /> : null}
            </div>
            <div style={{height: 15}} />
            <div style={{height: 20, width: 'fit-content', width: '-webkit-fit-content', margin: 'auto'}}>
              <div style={{height: 12, width: 'fit-content', width: '-webkit-fit-content'}} onClick={() => this.changeImage(8)}>
                {this.state.labels[8].string}
              </div>
              {this.state.p[8] ? <div style={{height: 8, width: '100%', backgroundColor: '#FFE300'}} /> : null}
            </div>
          </div>
        </div>
        {
          this.state.index === -1 ? null :
          <div style={{
            margin: 'auto',
            height: 27.6,
            width: 120,
            marginTop: 30,
            backgroundImage: 'url(/image/viewProject.jpg)',
            backgroundSize: '100% 100%'
          }} onClick={this.view} />
        }
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
      anchors:              ['section'],
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
          <Section><Page2 /></Section>
        </SectionsContainer>
      </Animation>
    )
  }
}
