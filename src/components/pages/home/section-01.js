import React, { Component } from 'react'
// LIBRARIES
import Slick from '@/components/libraries/slick'

class Section extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    let self = this

    return (
      <section className="section-01">
        <Slick>
          <div className="slick-item">
            <div className="slide">
              dsad
            </div>
          </div>
          <div className="slick-item">
            <div className="slide">
              fdfsd
            </div>
          </div>
          <div className="slick-item">
            <div className="slide">
              cscsd
            </div>
          </div>
        </Slick>
      </section>
    )
  }
}

export default Section
