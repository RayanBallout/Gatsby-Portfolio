import React from 'react';

import Layout from '../components/Layout';

//components
import HomeHero from '../components/HomeHero';
import Skills from '../components/Skills';

function Home() {
  return (
    <Layout>
      <HomeHero />
      <Skills />
    </Layout>
  );
}

export default Home;
