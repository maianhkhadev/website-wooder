import React, { Component } from 'react'

require('slick-carousel/slick/slick.css')
require('slick-carousel/slick/slick-theme.css')
require('slick-carousel/slick/slick.js')

class Library extends Component {

  constructor(props) {
    super(props)
    this.slickGoTo = this.slickGoTo.bind(this)
    this.slickPrev = this.slickPrev.bind(this)
    this.slickNext = this.slickNext.bind(this)

    this.state = {
      options: {

      }
    }
  }

  slickGoTo(id) {
    let self = this
    window.$(self.refs.slick).slick('slickGoTo', id)
  }
  slickPrev() {
    let self = this
    window.$(self.refs.slick).slick('slickPrev')
  }
  slickNext() {
    let self = this
    window.$(self.refs.slick).slick('slickNext')
  }

  componentDidMount() {
    let self = this
    let options = self.props.options ? self.props.options : self.state.options
    window.$(self.refs.slick).slick(options)
  }

  render() {
    let self = this

    return (
      <div ref="slick">
        {self.props.children}
      </div>
    )
  }
}

export default Library
