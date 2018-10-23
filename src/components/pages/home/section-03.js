import React, { Component } from 'react'
// STORE
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {  } from '@/store/actions'
// BLOCK
import BlockFeature from '@/components/blocks/block-feature'

class Section extends Component {

  constructor(props) {
    super(props)

    this.state = {
      features: [
        {
          title: 'Innovative Design',
          image: {
            src: require('@/assets/images/page-home/section-03/im-01.png'),
            alt: ''
          }
        }, {
          title: 'High-level Skills',
          image: {
            src: require('@/assets/images/page-home/section-03/im-02.png'),
            alt: ''
          }
        }, {
          title: 'Quality Products',
          image: {
            src: require('@/assets/images/page-home/section-03/im-03.png'),
            alt: ''
          }
        }
      ]
    }
  }

  componentDidMount() {

  }

  renderFeatures = () => {
    let self = this

    let features = self.state.features.map((feature) =>
      <div className="col-xl-3 mx-auto">
        <BlockFeature feature={ feature } />
      </div>
    )

    return (
      <div className="row">
        { features }
      </div>
    )
  }

  render() {

    return (
      <section className="section-03">
        <div className="container">
          <div className="section-header">
            <div className="section-title">wooder – is quality</div>
            <div className="line"></div>
            <p>We create unique design objects made of rare wood, specially under the order. Look at the short video about our work.</p>
          </div>
          <div className="section-content">
            <renderFeatures />
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({  })

const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Section)
