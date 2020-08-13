import React from 'react';

import { Layout } from '../components';
import Home from './Home';
import Contact from './Contact';
import Story from './Story';
import Testimonies from './Testimonies';

const Index = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <Home />
    <Story />
    <Testimonies />
    <Contact />
  </Layout>
);

export default Index;
