import React from 'react';

import { Link, graphql } from 'gatsby';
import { StaticImage, IGatsbyImageData } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import RecipesList from '../components/RecipesList';
import SEO from '../components/SEO';

interface AboutPageProps {
  data: {
    allContentfulRecipe: {
      nodes: {
        id: string;
        title: string;
        image: { gatsbyImageData: IGatsbyImageData };
        prepTime: number;
        cookTime: number;
      }[];
    };
  };
}

function About(props: AboutPageProps) {
  const { data } = props;

  const {
    allContentfulRecipe: { nodes: recipes },
  } = data;

  return (
    <Layout>
      <SEO title='About' />
      <main className='page'>
        <section className='about-page'>
          <article>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link to='/contact' className='btn'>
              contact
            </Link>
          </article>
          <StaticImage
            src='../assets/images/about.jpeg'
            alt='Person Pouring Salt in Bowl'
            className='about-img'
            placeholder='tracedSVG'
          />
        </section>
        <section className='featured-recipes'>
          <h5>Look At This Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
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
