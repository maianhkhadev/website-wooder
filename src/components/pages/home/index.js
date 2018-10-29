import React, { Component } from 'react';
// LAYOUT
import Layout from '@/components/layouts/default'
// SECTIONS
import Section01 from './section-01'
import Section02 from './section-02'
import Section03 from './section-03'
import Section04 from './section-04'
import SectionAboutUs from './section-about-us'

class Page extends Component {
  render() {
    return (
      <Layout>
        <div className="page page-home" id="page-home">

          <Section01 />

          <Section02 />

          <Section03 />

          <Section04 />

          <SectionAboutUs />

        </div>
      </Layout>
    );
  }
}

export default Page
