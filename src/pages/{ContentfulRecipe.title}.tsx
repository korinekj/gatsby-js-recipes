/* eslint-disable react/no-array-index-key */
import React from 'react';
import { graphql, Link } from 'gatsby';

import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

import { BsClockHistory, BsClock, BsPeople } from 'react-icons/bs';

import Layout from '../components/Layout';

interface Props {
  data: {
    contentfulRecipe: {
      content: {
        ingredients: [string];
        instructions: [string];
        tags: [string];
        tools: [string];
      };
      cookTime: number;
      description: { description: string };
      image: { gatsbyImageData: IGatsbyImageData };
      prepTime: number;
      servings: number;
      title: string;
    };
  };
}

function RecipeTemplate(props: Props) {
  const {
    data: {
      contentfulRecipe: {
        content: { ingredients, instructions, tags, tools },
        cookTime,
        description: { description },
        image,
        prepTime,
        servings,
        title,
      },
    },
  } = props;

  const pathToImage = getImage(image);

  return (
    <Layout>
      <main className='page'>
        <div className='recipe-page'>
          {/* hero section */}
          <section className='recipe-hero'>
            <GatsbyImage
              image={pathToImage!}
              alt={title}
              className='about-img'
            />
            <article className='recipe-info'>
              <h2>{title}</h2>
              <p>{description}</p>
              {/* icons */}
              <div className='recipe-icons'>
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>servings</h5>
                  <p>{servings}</p>
                </article>
              </div>
              {/* tags */}
              <p className='recipe-tags'>
                Tags :
                {tags.map((tag, index) => (
                  <Link to={tag} key={index}>
                    {tag}
                  </Link>
                ))}
              </p>
            </article>
          </section>
          {/* rest of the content */}
          <section className='recipe-content'>
            <article>
              <h4>instructions</h4>
              {instructions.map((instruction, index) => (
                <div key={index} className='single-instruction'>
                  <header>
                    <p>step {index + 1}</p>
                    <div />
                  </header>
                  <p>{instruction}</p>
                </div>
              ))}
            </article>
            <article className='second-column'>
              <div>
                <h4>ingredients</h4>
                {ingredients.map((ingredient, index) => (
                  <p key={index} className='single-ingredient'>
                    {ingredient}
                  </p>
                ))}
              </div>
              <div>
                <h4>tools</h4>
                {tools.map((tool, index) => (
                  <p key={index} className='single-tool'>
                    {tool}
                  </p>
                ))}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query GetSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`;

export default RecipeTemplate;
