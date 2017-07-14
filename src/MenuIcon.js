import React, {Component} from 'react'

const s = {
  width: 35,
  height: 10,
  backgroundColor: 'black',
  marginTop: 1
}

export default class extends Component {
  constructor() {
    super()
    this.state = {
      status: 0,
      styles: {
        line1: s,
        line2: s,
        line3: s
      }
    }
  }

  ChangeStyle() {
    if(!this.state.status) {
      this.setState({
          styles: {
            line1: {
              width: 5,
              height: 1,
              BackgroundColor: 'black',
              marginTop: 1,
              transform: 'rotate(45)'
            }
          }
      })
    }
  }

  render() {
    return (
      // <div onClick={this.ChangeStyle}>
      //   <h1>FUCK</h1>
      //   <div style={this.state.styles.line1} />
      //   <div style={this.state.styles.line2} />
      //   <div style={this.state.styles.line3} />
      // </div>
      <div>
        <h1>FUCK</h1>
      </div>
    )
  }
}
