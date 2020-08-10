import React from 'react';

import { Layout } from '../components';
import Home from './Home';
import Contact from './Contact';

const Index = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <Home />
    <Contact />
  </Layout>
);

export default Index;
