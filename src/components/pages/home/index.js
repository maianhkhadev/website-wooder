import React, { Component } from 'react';
// LAYOUT
import Layout from '@/components/layouts/default'
// SECTIONS
import Section03 from './section-03'
import SectionAboutUs from './section-about-us'

class Page extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              dsadsda
            </div>
          </div>
        </div>

        <Section03 />

        <SectionAboutUs />
      </Layout>
    );
  }
}

export default Page
