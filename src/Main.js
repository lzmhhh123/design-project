import React, { Component } from 'react'
import {
  Router,
  Route,
  browserHistory,
  IndexRoute
} from 'react-router'
import Homepage from './Homepage'
import Layout from './Layout'

export default class extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <Router history={browserHistory} >
        <Route path="/" component={Layout}>
          <IndexRoute component={Homepage}/>
        </Route>
      </Router>
    )
  }
}
