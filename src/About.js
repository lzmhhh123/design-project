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
        <BannerAnim ref="banner" type={"across"} autoPlay={true} duration={1000} autoPlaySpeed={2000}>
          <Element key="demo1">
            <div>
              <img src="/image/preview_1.gif" />
            </div>
          </Element>
          <Element key="demo2">
            <div>
              <img src="/image/preview_2.gif" />
            </div>
          </Element>
        </BannerAnim>
      </div>
    )
  }
}
