import React from 'react';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';

function About() {
  return (
    <Layout>
      <main className='page'>
        <section className='about-page'>
          <article>
            <h2>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius,
              debitis!
            </h2>
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Soluta animi id sit sunt molestiae quasi hic,
              nisi suscipit dicta alias.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              cupiditate illo voluptatum quasi, nulla libero consequatur,
              assumenda quo commodi facere nam modi suscipit in quas!
            </p>
            <Link to='/contact' className='btn'>
              contact
            </Link>
          </article>
          <StaticImage
            src='../assets/images/about.jpeg'
            alt='Person Pouring Salt in Bowl'
            className='about-img'
            placeholder='blurred'
          />
        </section>
      </main>
    </Layout>
  );
}

export default About;
