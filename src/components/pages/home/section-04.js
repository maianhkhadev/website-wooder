import React, { Component } from 'react'

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
      <section className="section-04">
        <div className="container">
          <div className="section-content">
            <div className="row">
              <div className="col-xl-9">
                <h2 className="section-title">we Do the design of any complexity</h2>

                <p>This is a team of professionals that make the furniture and wood décor high standard. Creating modern designs. Adhering to the global quality standards. And we are doing work with love.</p>

                <button className="btn btn-outline-white">Watch Video</button>
              </div>
            </div>

            <div className="line-deco-01"></div>
          </div>
        </div>
      </section>
    )
  }
}

export default Section
