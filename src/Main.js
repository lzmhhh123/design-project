import React, { Component } from 'react'
import {
  Router,
  Route,
  browserHistory,
  IndexRoute,
  Redirect
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
        <Route path="/" Component={Layout}>
          <Route path="/homepage" Component={Homepage} />
        </Route>
      </Router>
    )
  }
}
