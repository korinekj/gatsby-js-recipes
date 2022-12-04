import React from 'react';
import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import RecipesList from '../components/RecipesList';

interface ContactPageProps {
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

function Contact(props: ContactPageProps) {
  const { data } = props;

  const {
    allContentfulRecipe: { nodes: recipes },
  } = data;

  return (
    <Layout>
      <main className='page'>
        <section className='contact-page'>
          <article className='contact-info'>
            <h1>Want To Get In Touch?</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae cum
              vero, ea eum ipsa similique ab saepe assumenda tenetur obcaecati
              laudantium, repellat repellendus maxime. Harum cupiditate nobis
              odio molestiae repudiandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, voluptatibus unde quisquam repellat dolores quasi nam
              sint, quas veniam voluptas laborum quae est, eum molestias fugit
              maxime. Tempora, soluta architecto!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              asperiores explicabo quia.
            </p>
          </article>
          <article>
            <form
              action='https://formspree.io/f/xeqdyjyo'
              method='POST'
              className='form contact-form'
            >
              <div className='form-row'>
                <label htmlFor='name'>
                  your name
                  <input type='text' name='name' id='name' />
                </label>
              </div>
              <div className='form-row'>
                <label htmlFor='email'>
                  your email
                  <input type='text' name='email' id='email' />
                </label>
              </div>
              <div className='form-row'>
                <label htmlFor='message'>
                  your message
                  <textarea name='message' id='message' />
                </label>
              </div>
              <button type='submit' className='btn block'>
                Submit
              </button>
            </form>
          </article>
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
  query Contactpage {
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

export default Contact;
