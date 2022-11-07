import React from 'react';
import Layout from '../components/Layout';

import * as styles from '../examples/about.module.scss';

function About() {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>About page</h1>
        <h1>Hello world</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo cumque
          consectetur assumenda labore provident sapiente incidunt, nobis ab
          nesciunt voluptas quasi laboriosam fugiat at laborum id odit
          distinctio quidem. Porro.
        </p>
      </div>
      <h2>Hello from about page</h2>
    </Layout>
  );
}

export default About;
