import React, {Component} from 'react'
import {Animation} from 'styled-animation'
import { SectionsContainer, Section } from 'react-fullpage'

class Page1 extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div style={{
        height: '70%',
        marginTop: '15%',
        width: '100%',
        backgroundImage: 'url(/image/number.png)',
        backgroundSize: '70% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '40% 60%'
      }}>
        <div style={{fontSize: 20, fontFamily: 'Helvetica', width: '100%', color: 'white', display: 'table'}}>
          <div style={{marginLeft: '15%', display: 'inline-block'}}>—OFFICE</div>
          <div style={{marginLeft: '15%', display: 'inline-block'}}>—PEOPLE</div>
          <div style={{marginLeft: '20%', display: 'inline-block'}}>—PROJECT</div>
        </div>
      </div>
    )
  }
}

class Page2 extends Component {
  constructor() {
    super()
  }
  render() {
    const rowStyle= {width: '100%', display: 'table', height: '33.3%'}
    return (
      <div style={{height: '70%', marginTop: '10%'}}>
        <div style={{
          fontSize: 60,
          color: 'white',
          textAlign: 'center',
          fontFamily: 'Helvetica'
        }}>
          <div style={{height: 55, width: 'fit-content', width: '-webkit-fit-content', marginLeft: 'auto', marginRight: 'auto'}}>
            The brand we’ve work along with
          </div>
          <div style={{height: 15, width: 1075, backgroundColor: '#FFE300', marginLeft: 'auto', marginRight: 'auto'}} />
        </div>
        <div style={{width: '70%', height: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '5%'}}>
          <div style={rowStyle}>
            <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-1.png)', backgroundSize: '55.40% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
            <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-2.png)', backgroundSize: '80% 33.33%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
            <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/104.png)', backgroundSize: '80% 30.80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
            <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-9.png)', backgroundSize: '80% 62.39%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
            <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-7.png)', backgroundSize: '80% 36.11%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
          </div>
          <div style={rowStyle}>
            <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-5.png)', backgroundSize: '80% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
            <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-6.png)', backgroundSize: '160% 49.26%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
            <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-8.png)', backgroundSize: '73.3% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
            <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-3.png)', backgroundSize: '80% 70.18%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
            <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/5-01.png)', backgroundSize: '78.46% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
          </div>
          <div style={rowStyle}>
            <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-10.png)', backgroundSize: '80% 29.64%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
            <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-11.png)', backgroundSize: '80% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
            <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-12.png)', backgroundSize: '80% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
            <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-4.png)', backgroundSize: '80% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
            <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-13.png)', backgroundSize: '80% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
          </div>
        </div>
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
      <div style={{
        height: '70%',
        marginTop: '15%',
        width: '100%',
        backgroundImage: 'url(/image/numberfill.png)',
        backgroundSize: '70% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '40% 60%'
      }}>
        <div style={{fontSize: 20, fontFamily: 'Helvetica', width: '100%', color: 'white', display: 'table'}}>
          <div style={{marginLeft: '15%', display: 'inline-block'}}>—OFFICE</div>
          <div style={{marginLeft: '15%', display: 'inline-block'}}>—PEOPLE</div>
          <div style={{marginLeft: '20%', display: 'inline-block'}}>—PROJECT</div>
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
    for(let i = 1; i <= 3; ++i) {
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
          <Section><Page1 /></Section>
          <Section><Page2 /></Section>
          <Section><Page3 /></Section>
        </SectionsContainer>
      </Animation>
    )
  }
}
