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
      p: [true, false, false, false, false, false, false, false, false]
    }
  }
  changeImage(index) {
    window.location.pathname = `/pdf/page${index}.pdf`
  }
  componentWillMount() {
    axios
      .post('/api/asklabel')
      .then(res => {
        this.setState({
          labels: res.data.labels
        })
      })
  }
  renderStyle() {
    let {p} = this.state
    let s = {
      marginTop: 70,
      height: '80%'
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
        <div style={{textAlign: 'center', fontSize: '120%', fontFamily: 'Helvetica', height: '85%'}}>
          <div style={{margin: 'auto', width: 'fit-content', width: '-webkit-fit-content'}}>
            <div style={{width: 'fit-content', width: '-webkit-fit-content', margin: 'auto'}}>
              <div style={{height: 20, width: 'fit-content', width: '-webkit-fit-content'}} onClick={() => this.changeImage(0)}>
                {this.state.labels[0].string}
              </div>
            </div>
            <div style={{height: 12}} />
            <div style={{width: 'fit-content', width: '-webkit-fit-content', margin: 'auto'}}>
              <div style={{height: 20, width: 'fit-content', width: '-webkit-fit-content'}} onClick={() => this.changeImage(1)}>
                {this.state.labels[1].string}
              </div>
            </div>
            <div style={{height: 12}} />
            <div style={{width: 'fit-content', width: '-webkit-fit-content', margin: 'auto'}}>
              <div style={{height: 20, width: 'fit-content', width: '-webkit-fit-content'}} onClick={() => this.changeImage(2)}>
                {this.state.labels[2].string}
              </div>
            </div>
            <div style={{height: 12}} />
            <div style={{width: 'fit-content', width: '-webkit-fit-content', margin: 'auto'}}>
              <div style={{height: 20, width: 'fit-content', width: '-webkit-fit-content'}} onClick={() => this.changeImage(3)}>
                {this.state.labels[3].string}
              </div>
            </div>
            <div style={{height: 12}} />
            <div style={{width: 'fit-content', width: '-webkit-fit-content', margin: 'auto'}}>
              <div style={{height: 20, width: 'fit-content', width: '-webkit-fit-content'}} onClick={() => this.changeImage(4)}>
                {this.state.labels[4].string}
              </div>
            </div>
            <div style={{height: 12}} />
            <div style={{width: 'fit-content', width: '-webkit-fit-content', margin: 'auto'}}>
              <div style={{height: 20, width: 'fit-content', width: '-webkit-fit-content'}} onClick={() => this.changeImage(5)}>
                {this.state.labels[5].string}
              </div>
            </div>
            <div style={{height: 12}} />
            <div style={{width: 'fit-content', width: '-webkit-fit-content', margin: 'auto'}}>
              <div style={{height: 20, width: 'fit-content', width: '-webkit-fit-content'}} onClick={() => this.changeImage(6)}>
                {this.state.labels[6].string}
              </div>
            </div>
            <div style={{height: 12}} />
            <div style={{width: 'fit-content', width: '-webkit-fit-content', margin: 'auto'}}>
              <div style={{height: 20, width: 'fit-content', width: '-webkit-fit-content'}} onClick={() => this.changeImage(7)}>
                {this.state.labels[7].string}
              </div>
            </div>
            <div style={{height: 12}} />
            <div style={{width: 'fit-content', width: '-webkit-fit-content', margin: 'auto'}}>
              <div style={{height: 20, width: 'fit-content', width: '-webkit-fit-content'}} onClick={() => this.changeImage(8)}>
                {this.state.labels[8].string}
              </div>
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
