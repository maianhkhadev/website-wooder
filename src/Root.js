import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
// STORE
import store from './store'
// PAGES
import Home from '@/components/pages/home/index'
import ErrorNotFound from '@/components/pages/error-not-found/index'

class Root extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route component={ ErrorNotFound }/>
        </Switch>
      </Provider>
    )
  }
}

export default Root
