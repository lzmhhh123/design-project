import React, {Component} from 'react'
import { Card } from 'material-ui/Card'
import { Animation } from 'styled-animation'
import BannerAnim, { Element } from 'rc-banner-anim';

export default class extends Component {
  constructor() {
    super()
    this.state = {
      status: 0,
      lastStatus: -1
    }
  }

  componentDidMount() {
    window.addEventListener('wheel', (event) => {
      let delta
      if(event.wheelDelta) {
        delta = event.wheelDelta;
	    }
      else if (event.detail) {
        delta = -event.detail;
	    }
      if(delta > 0) delta = 1;
      else delta = -1;
      if(delta == -1 && this.state.status == 0) return
      if(delta == 1 && this.state.status == 3) return
      this.setState({
        lastStatus: this.state.status,
        status: this.state.status + delta,
      })
    })
  }

  render() {
    return (
<<<<<<< HEAD
      <div style={{marginTop: 'auto'}} id="home">
      {
        this.state.status === 1 && this.state.lastStatus === 0 ? <Animation name="fadeOutUp" duration="1s">
          <img className="gif" src="/image/preview_1.gif" />
        </Animation> : null
      }
      {
        this.state.status === 0 && this.state.lastStatus === 1 ? <Animation name="fadeInDown" duration="1s">
          <img className="gif" src="/image/preview_1.gif" />
        </Animation> : null
      }
      {
        this.state.status === 0 && this.state.lastStatus === -1 ? <Animation name="fadeInUp" duration="1s">
          <img className="gif" src="/image/preview_1.gif" />
        </Animation> : null
      }
      {
        this.state.status === 2 && this.state.lastStatus === 1 ? <Animation name="fadeOutUp" duration="1s">
          <img className="gif" src="/image/preview_2.gif" />
        </Animation> : null
      }
      {
        this.state.status === 1 && this.state.lastStatus === 0 ? <Animation name="fadeInUp" duration="1s">
          <img className="gif" src="/image/preview_2.gif" />
        </Animation> : null
      }
      {
        this.state.status === 1 && this.state.lastStatus === 2 ? <Animation name="fadeInDown" duration="1s">
          <img className="gif" src="/image/preview_2.gif" />
        </Animation> : null
      }
      {
        this.state.status === 0 && this.state.lastStatus === 1 ? <Animation name="fadeOutDown" duration="1s">
          <img className="gif" src="/image/preview_2.gif" />
        </Animation> : null
      }
      {
        this.state.status === 3 && this.state.lastStatus === 2 ? <Animation name="fadeOutUp" duration="1s">
          <img className="gif" src="/image/preview_3.gif" />
        </Animation> : null
      }
      {
        this.state.status === 2 && this.state.lastStatus === 1 ? <Animation name="fadeInUp" duration="1s">
          <img className="gif" src="/image/preview_3.gif" />
        </Animation> : null
      }
      {
        this.state.status === 2 && this.state.lastStatus === 3 ? <Animation name="fadeInDown" duration="1s">
          <img className="gif" src="/image/preview_3.gif" />
        </Animation> : null
      }
      {
        this.state.status === 1 && this.state.lastStatus === 2 ? <Animation name="fadeOutDown" duration="1s">
          <img className="gif" src="/image/preview_3.gif" />
        </Animation> : null
      }
      {
        this.state.status === 2 && this.state.lastStatus === 3 ? <Animation name="fadeOutDown" duration="1s">
          <img className="gif" src="/image/preview_4.gif" />
        </Animation> : null
      }
      {
        this.state.status === 3 && this.state.lastStatus === 2 ? <Animation name="fadeInUp" duration="1s">
          <img className="gif" src="/image/preview_4.gif" />
        </Animation> : null
      }
=======
      <div style={{marginTop: 'auto'}}>
        <Animation name="fadeInUpBig" duration="1s">
          <div>
            <img src="/image/preview_1.gif" />
          </div>
          <div>
            <img src="/image/preview_2.gif" />
          </div>
        </Animation>
>>>>>>> 7f3ee35cf2cfdb2b0aed758c014f5070b8d1363b
      </div>
    )
  }
}
