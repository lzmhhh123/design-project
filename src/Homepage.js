import React, {Component} from 'react'
import { Card } from 'material-ui/Card'
import { Animation } from 'styled-animation'
import BannerAnim, { Element } from 'rc-banner-anim';

export default class extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div style={{marginTop: 'auto'}}>
        <div>
          <img src="/image/preview_1.gif" />
        </div>
        <div>
          <img src="/image/preview_2.gif" />
        </div>
      </div>
    )
  }
}
