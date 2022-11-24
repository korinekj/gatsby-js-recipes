import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import TagsList from './TagsList';
import RecipesList from './RecipesList';

function AllRecipes() {
  const {
    allContentfulRecipe: { nodes: recipes },
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
  } = useStaticQuery(query);

  return (
    <section className='recipes-container'>
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  );
}

const query = graphql`
  query {
    allContentfulRecipe(sort: { title: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default AllRecipes;
