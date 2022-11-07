import React from 'react';
import './layout.scss';

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
