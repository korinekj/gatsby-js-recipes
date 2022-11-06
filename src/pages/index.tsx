import React from 'react';
import { Link } from 'gatsby';

import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <h1>Hello people!</h1>
      <Navbar />
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
    </div>
  );
}
