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
      labels: null
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
  renderStyle() {
    let {p} = this.state
    let s = {
      marginTop: 150,
      height: '80%'
    }
    if(p[0]) {
      s['backgroundImage'] = 'url(/image/image1.png)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '100% 70%'
      s['backgroundPosition'] = '0% 70%'
    }
    else if(p[2]) {
      s['backgroundImage'] = 'url(/image/image3.png)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '30% 70%'
      s['backgroundPosition'] = '20% 20%'
    }
    else if(p[7]) {
      s['backgroundImage'] = 'url(/image/image8.png)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '50% 45%'
      s['backgroundPosition'] = '50% 65%'
    }
    else if(p[1]) {
      s['backgroundImage'] = 'url(/image/image2.jpg)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '60% 70%'
      s['backgroundPosition'] = '50% 25%'
    }
    else if(p[4]) {
      s['backgroundImage'] = 'url(/image/image5.png)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '30% 55%'
      s['backgroundPosition'] = '50% 70%'
    }
    else if(p[8]) {
      s['backgroundImage'] = 'url(/image/image9.jpg)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '85% 130%'
      s['backgroundPosition'] = '50% -200px'
    }
    else if(p[3]) {
      s['backgroundImage'] = 'url(/image/image4.jpg)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '45% 60%'
      s['backgroundPosition'] = '90% 20%'
    }
    else if(p[5]) {
      s['backgroundImage'] = 'url(/image/image6.png)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '30% 60%'
      s['backgroundPosition'] = '50% 70%'
    }
    else if(p[6]) {
      s['backgroundImage'] = 'url(/image/image7.jpg)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '45% 65%'
      s['backgroundPosition'] = '90% 20%'
    }
    return s
  }
  render() {
    let styleLineTrue = {
      height: 20,
      width: '100%',
      background: '#FFE300',
      transition: 'all 0.5s linear'
    }
    let styleLineFalse = {
      height: 20,
      width: 0,
      background: '#FFE300',
      transition: 'all 0.5s linear'
    }
    let containStyle = this.renderStyle()
    if(!this.state.labels) return <div />
    return (
      <div style={containStyle}>
        <div style={{textAlign: 'center', fontSize: 14, fontFamily: 'Helvetica', marginBottom: 50}}>Made by 小的企划</div>
        <div style={{textAlign: 'center', fontSize: 40, fontFamily: 'Helvetica', height: '70%'}}>
          <div style={{
            height: 50,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 'fit-content', width: '-webkit-fit-content',
            display: 'table'
          }}>
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(0)} onClick={() => this.viewProject(1)}>
                {this.state.labels[0].string}
              </div>
              <div style={this.state.p[0] ? styleLineTrue : styleLineFalse}/>
            </div>
            &nbsp;/&nbsp;
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(1)} onClick={() => this.viewProject(2)}>
                {this.state.labels[1].string}
              </div>
              <div style={this.state.p[1] ? styleLineTrue : styleLineFalse}/>
            </div>
            &nbsp;/&nbsp;
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(2)} onClick={() => this.viewProject(3)}>
                {this.state.labels[2].string}
              </div>
              <div style={this.state.p[2] ? styleLineTrue : styleLineFalse}/>
            </div>
          </div>
          <div style={{
            height: 50,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 'fit-content', width: '-webkit-fit-content',
            display: 'table'
          }}>
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(3)} onClick={() => this.viewProject(4)}>
                {this.state.labels[3].string}
              </div>
              <div style={this.state.p[3] ? styleLineTrue : styleLineFalse}/>
            </div>
            &nbsp;/&nbsp;
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(4)} onClick={() => this.viewProject(5)}>
                {this.state.labels[4].string}
              </div>
              <div style={this.state.p[4] ? styleLineTrue : styleLineFalse}/>
            </div>
            &nbsp;/&nbsp;
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(5)} onClick={() => this.viewProject(6)}>
                {this.state.labels[5].string}
              </div>
              <div style={this.state.p[5] ? styleLineTrue : styleLineFalse}/>
            </div>
          </div>
          <div style={{
            height: 50,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 'fit-content', width: '-webkit-fit-content',
            display: 'table'
          }}>
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(6)} onClick={() => this.viewProject(7)}>
                {this.state.labels[6].string}
              </div>
              <div style={this.state.p[6] ? styleLineTrue : styleLineFalse}/>
            </div>
            &nbsp;/&nbsp;
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(7)} onClick={() => this.viewProject(8)}>
                {this.state.labels[7].string}
              </div>
              <div style={this.state.p[7] ? styleLineTrue : styleLineFalse}/>
            </div>
            &nbsp;/&nbsp;
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(8)} onClick={() => this.viewProject(9)}>
                {this.state.labels[8].string}
              </div>
              <div style={this.state.p[8] ? styleLineTrue : styleLineFalse}/>
            </div>
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
