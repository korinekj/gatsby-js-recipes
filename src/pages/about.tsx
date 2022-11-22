import React from 'react';

import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import RecipesList from '../components/RecipesList';

function About(props: any) {
  const { data } = props;

  console.log(data);

  const {
    allContentfulRecipe: { nodes },
  } = data;

  console.log(nodes);

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
        <section className=''>
          <h5>Look at this awesomesouce!</h5>
          <RecipesList recipes={nodes} />
        </section>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default About;
