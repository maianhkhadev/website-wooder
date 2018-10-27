import React from 'react'

function Section(props) {

  return (
    <section className="section-about-us">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <img className="im-01" src={ require('@/assets/images/page-home/section-about-us/im-01.jpg') } alt="" />
          </div>
          <div className="col-xl-4">
            <div className="section-content">
              <h2 className="section-title">About us</h2>
              <p>We are a team of professionals in the wood processing and the creation of wooden furniture of the highest class</p>
              <button className="btn btn-outline-black">learn more</button>
            </div>
          </div>
        </div>
      </div>

      <img className="deco-01" src={ require('@/assets/images/page-home/section-about-us/deco-01.png') } alt="" />
    </section>
  )
}

export default Section
