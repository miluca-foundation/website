import React from 'react';

import { Layout } from '../components';
import Home from './Home';
import Contact from './Contact';
import Story from './Story';

const Index = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <Home />
    <Story />
    <Contact />
  </Layout>
);

export default Index;
