import React, { Component } from 'react'
// BLOCK
import BlockLearnMore from '@/components/blocks/block-learn-more'

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
      <section className="section-02">
        <div className="container">
          <div className="block-01">
            <div className="row">
              <div className="col-xl-6">
                <div className="section-content">
                  <h2 className="section-title">Furniture</h2>

                  <p>Wooder utilizes materials otherwise left behind, rendered useless in their original intent. By creating new pieces made of reclaimed barnwood</p>

                  <BlockLearnMore />
                </div>
              </div>
              <div className="col-xl-6">
                <img className="im-01" src={ require('@/assets/images/page-home/section-02/im-01.jpg') } alt="" />
              </div>
            </div>

            <img className="deco-01" src={ require('@/assets/images/page-home/section-02/deco-01.png') } alt="" />
          </div>
          <div className="block-02">
            <div className="row">
              <div className="col-xl-6">
                <img className="im-02" src={ require('@/assets/images/page-home/section-02/im-02.jpg') } alt="" />
              </div>
              <div className="col-xl-6">
                <div className="section-content">
                  <h2 className="section-title">Decor</h2>

                  <p>We make all types of wooden decor as per design given by Architect,Interior designer, contractor which is suitable</p>

                  <BlockLearnMore />
                </div>
              </div>
            </div>

            <img className="deco-02" src={ require('@/assets/images/page-home/section-02/deco-02.png') } alt="" />
          </div>
        </div>
      </section>
    )
  }
}

export default Section
