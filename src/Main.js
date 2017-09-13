import React, { Component } from 'react'
import {
  Router,
  Route,
  browserHistory,
  IndexRoute,
  Redirect
} from 'react-router'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Layout from './Layout'
import Homepage from './Homepage'
import Admin from './Admin'

class page extends Component {
  constructor() {
    super()
  }
  render() {
    return <img style={{
      position:'absolute',
      top: '95px',
      width: '100%'
    }} src={`/pdf/page${window.location.hash.slice(1)}.jpg`} />
  }
}

export default class extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Router history={browserHistory} >
        <Route path="/" component={Layout}>
          <IndexRoute component={Homepage} />
          <Route path="/about" component={Portfolio} />
          <Route path="/portfolio" component={Contact} />
          <Route path="/contact" component={About} />
          <Route path="/admin" component={Admin} />
          <Route path="/page" component={page} />
        </Route>
        <Redirect path="*" to="/" />
      </Router>
    )
  }
}
