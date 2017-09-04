import React, {Component} from 'react'
import {Animation} from 'styled-animation'
import { SectionsContainer, Section } from 'react-fullpage'
import {browserHistory, Link} from 'react-router'
import axios from 'axios'

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
    this.state = {
      p: [false, false, false, false, false, false, false, false, false],
      labels: null,
      height: 0
    }
  }
  changeImage(index) {
    let { p } = this.state
    for(let i = 0; i < 9; ++i)
      p[i] = false;
    p[index] = true;
    this.setState({ p })
  }
  componentWillMount() {
    axios
      .post('/api/asklabel')
      .then(res => {
        console.log(res.data.labels);
        res.data.labels.sort((a, b) => parseInt(a.id, 10) > parseInt(b.id, 10))
        this.setState({
          labels: res.data.labels
        })
      })
  }
  viewProject(index) {
    window.location.pathname = `/pdf/page${index}.pdf`
  }
  handleResize(event) {
    event.preventDefault()
    this.setState({
       height: window.screen.availHeight * 0.9 * document.body.clientWidth / window.screen.availWidth
    })
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this))
    this.setState({
      height: window.screen.availHeight * 0.9 * document.body.clientWidth / window.screen.availWidth
    })
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this))
  }
  renderStyle() {
    let {p} = this.state
    let s = {
      overflow: 'hidden',
      height: this.state.height,
      paddingTop: this.state.height * 0.396604938271605,
    }
    if(p[0]) {
      s['backgroundImage'] = 'url(/image/image1.png)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '100% 55%'
      s['backgroundPosition'] = '0% 100%'
    }
    else if(p[2]) {
      s['backgroundImage'] = 'url(/image/image3.png)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '30% 55%'
      s['backgroundPosition'] = '10% 68%'
    }
    else if(p[6]) {
      s['backgroundImage'] = 'url(/image/image8.png)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '45% 50%'
      s['backgroundPosition'] = '50% 94%'
    }
    else if(p[1]) {
      s['backgroundImage'] = 'url(/image/image2.jpg)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '50% 67%'
      s['backgroundPosition'] = '50% 60%'
    }
    else if(p[4]) {
      s['backgroundImage'] = 'url(/image/image5.png)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '20% 36%'
      s['backgroundPosition'] = '50% 90%'
    }
    else if(p[8]) {
      s['backgroundImage'] = 'url(/image/image9.jpg)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '60% 67%'
      s['backgroundPosition'] = '50% 44%'
    }
    else if(p[3]) {
      s['backgroundImage'] = 'url(/image/image4.jpg)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '35% 50%'
      s['backgroundPosition'] = '80% 50%'
    }
    else if(p[5]) {
      s['backgroundImage'] = 'url(/image/image6.png)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '20% 40%'
      s['backgroundPosition'] = '50% 94%'
    }
    else if(p[7]) {
      s['backgroundImage'] = 'url(/image/image7.jpg)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '40% 55%'
      s['backgroundPosition'] = '95% 60%'
    }
    return s
  }
  render() {
    let styleLineTrue = {
      height: 12,
      width: '100%',
      background: '#FFE300',
      transition: 'all 0.5s linear'
    }
    let styleLineFalse = {
      height: 12,
      width: 0,
      background: '#FFE300',
      transition: 'all 0.5s linear'
    }
    let containStyle = this.renderStyle()
    if(!this.state.labels) return <div />
    return (
      <div style={containStyle}>
        <div style={{
          textAlign: 'center',
          fontSize: 24,
          color: '#333333',
          fontFamily: 'PingFangSC-Thin, sans-serif',
          cursor: 'default',
          height: `${this.state.height * (1 - 0.396604938271605)}px`}}
        >
          <div style={{
            height: 48,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 'fit-content', width: '-webkit-fit-content',
            display: 'table'
          }}>
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 18, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(0)} onClick={() => this.viewProject(1)}>
                {this.state.labels[0].string}
              </div>
              <div style={this.state.p[0] ? styleLineTrue : styleLineFalse}/>
            </div>
            &nbsp;/&nbsp;
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 18, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(1)} onClick={() => this.viewProject(2)}>
                {this.state.labels[1].string}
              </div>
              <div style={this.state.p[1] ? styleLineTrue : styleLineFalse}/>
            </div>
            &nbsp;/&nbsp;
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 18, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(2)} onClick={() => this.viewProject(3)}>
                {this.state.labels[2].string}
              </div>
              <div style={this.state.p[2] ? styleLineTrue : styleLineFalse}/>
            </div>
          </div>
          <div style={{
            height: 48,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 'fit-content', width: '-webkit-fit-content',
            display: 'table'
          }}>
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 18, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(3)} onClick={() => this.viewProject(4)}>
                {this.state.labels[3].string}
              </div>
              <div style={this.state.p[3] ? styleLineTrue : styleLineFalse}/>
            </div>
            &nbsp;/&nbsp;
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 18, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(4)} onClick={() => this.viewProject(5)}>
                {this.state.labels[4].string}
              </div>
              <div style={this.state.p[4] ? styleLineTrue : styleLineFalse}/>
            </div>
            &nbsp;/&nbsp;
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 18, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(5)} onClick={() => this.viewProject(6)}>
                {this.state.labels[5].string}
              </div>
              <div style={this.state.p[5] ? styleLineTrue : styleLineFalse}/>
            </div>
          </div>
          <div style={{
            height: 48,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 'fit-content', width: '-webkit-fit-content',
            display: 'table'
          }}>
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 18, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(6)} onClick={() => this.viewProject(7)}>
                {this.state.labels[6].string}
              </div>
              <div style={this.state.p[6] ? styleLineTrue : styleLineFalse}/>
            </div>
            &nbsp;/&nbsp;
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 18, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(7)} onClick={() => this.viewProject(8)}>
                {this.state.labels[7].string}
              </div>
              <div style={this.state.p[7] ? styleLineTrue : styleLineFalse}/>
            </div>
            &nbsp;/&nbsp;
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 18, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(8)} onClick={() => this.viewProject(9)}>
                {this.state.labels[8].string}
              </div>
              <div style={this.state.p[8] ? styleLineTrue : styleLineFalse}/>
            </div>
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
