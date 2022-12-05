import React from 'react';
import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import RecipesList from '../components/RecipesList';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

interface Props {
  data: {
    allContentfulRecipe: {
      nodes: {
        cookTime: number;
        id: string;
        image: { gatsbyImageData: IGatsbyImageData };
        prepTime: number;
        title: string;
      }[];
    };
  };
  pageContext: { tag: string };
}

function TagTemplate(props: Props) {
  const {
    data: {
      allContentfulRecipe: { nodes: recipes },
    },
    pageContext: { tag },
  } = props;

  return (
    <Layout>
      <SEO title={tag} />
      <main className='page'>
        <h2>{tag}</h2>
        <div className='tag-recipes'>
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default TagTemplate;
