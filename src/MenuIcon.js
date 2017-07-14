import React, {Component} from 'react'
import {
  Animate,
  Transition,
} from 'react-move'

export default class extends Component {
  constructor() {
    super()
    this.state = {
      bar: []
    }
  }

  componentWillMount() {
    let s = this.props.Status
    console.log('dsad' + s)
    if(s == 0) {
      this.setState({
        bar: [
          {
            rotate: 0,
            translate: 0,
            opacity: 1
          },
          {
            rotate: 0,
            translate: 0,
            opacity: 1
          },
          {
            rotate: 0,
            translate: 0,
            opacity: 1
          }
        ]
      })
    }
    else if(s == 1) {
      this.setState({
        bar: [
          {
            rotate: 45,
            translate: -8,
            opacity: 1
          },
          {
            rotate: 0,
            translate: -35,
            opacity: 0
          },
          {
            rotate: -45,
            translate: -8,
            opacity: 1
          }
        ]
      })
    }
    else {
      this.setState({
        bar: [
          {
            rotate: -45,
            translate: 8,
            opacity: 1
          },
          {
            rotate: 0,
            translate: 35,
            opacity: 1
          },
          {
            rotate: 45,
            translate: 8,
            opacity: 1
          }
        ]
      })
    }
  }

  render() {
    return (
      <div>
      {this.state.bar.map((val, k) =>
          <Animate data={val} key={k}>
            {
              data => {
                return <div style={{
                  width: '35px',
                  marginTop: '3px',
                  marginBottom: '3px',
                  height: '5px',
                  background: 'black',
                  borderRadius: '1px',
                  opacity: `${data.opacity}`,
                  transform: `rotate(${data.rotate}deg), translate(${data.translate}px)`
                }} />
              }
            }
          </Animate>
        )
      }
      </div>
    )
  }
}
