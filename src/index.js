import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Root from './Root'
import * as serviceWorker from './serviceWorker'
import './assets/vendors/ui-kit/ui-kit.css'
import './assets/scss/index.scss'

/**
* jQuery and Bootstrap includes
*/
window.$ = window.jQuery = require('jquery')
require('./assets/vendors/ui-kit/ui-kit.js')

ReactDOM.render((
  <BrowserRouter>
    <Root />
  </BrowserRouter>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
