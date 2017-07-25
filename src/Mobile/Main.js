import React, { Component } from 'react'
import {
  Router,
  Route,
  browserHistory,
  IndexRoute
} from 'react-router'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Layout from './Layout'
import Homepage from './Homepage'

export default class extends Component {
  constructor() {
    super()

  }
  render() {
    return (
      <Router history={browserHistory} >
        <Route path="/" component={Layout}>
          <IndexRoute component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Route>
      </Router>
    )
  }
}
