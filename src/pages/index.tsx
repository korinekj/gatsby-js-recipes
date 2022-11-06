import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1>Home page</h1>

      <div>
        <Link to='/about'>About</Link>
      </div>
      <div>
        <Link to='/company/history'>History</Link>
      </div>
      <div>
        <Link to='/contact'>Contact</Link>
      </div>
      <a href='/about'>Reg link</a>
      <a href='https://www.gatsbyjs.com/docs/'>Gatsby docs</a>
    </Layout>
  );
}
