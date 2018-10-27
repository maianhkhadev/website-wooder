import React, { Component } from 'react'
// STORE
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {  } from '@/store/actions'
// BLOCK
import BlockFeature from '@/components/blocks/block-feature'

function RenderFeatures(props) {

  let features = props.features.map((feature, index) =>
    <div className="col-xl-3 mx-auto" key={ `feature-0${index}` }>
      <BlockFeature feature={ feature } />
    </div>
  )

  return (
    <div className="row">
      { features }
    </div>
  )
}

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

  render() {
    let self = this

    return (
      <section className="section-03">
        <div className="container">
          <div className="section-header">
            <div className="row">
              <div className="col-xl-6 mx-auto">
                <h2 className="section-title">wooder – is quality</h2>
                <div className="line"></div>
                <p className="section-decs">We create unique design objects made of rare wood, specially under the order. Look at the short video about our work.</p>
              </div>
            </div>
          </div>
          <div className="section-content">
            <RenderFeatures features={ self.state.features }/>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({  })

const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Section)
