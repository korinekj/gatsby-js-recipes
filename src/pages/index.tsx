import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

import { page, text } from '../examples/home.module.scss';

export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <h1>Home page</h1>
        <h1>hello world</h1>
        <h1>hello people</h1>
        <p className={text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
          soluta cum exercitationem harum voluptas? Amet maxime placeat
          consequatur incidunt accusantium! Facere dignissimos fugit magni
          asperiores minus natus nihil numquam enim?
        </p>
      </div>
    </Layout>
  );
}
