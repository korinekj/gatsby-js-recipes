import React from 'react';

import 'normalize.css';
import '../assets/css/main.scss';

import Navbar from './Navbar';
import Footer from './Footer';

function Layout(props: React.PropsWithChildren) {
  const { children } = props;

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
