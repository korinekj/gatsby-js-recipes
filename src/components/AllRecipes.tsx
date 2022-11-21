import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import TagsList from './TagsList';
import RecipesList from './RecipesList';

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

function AllRecipes() {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(query);

  console.log(recipes);

  return (
    <div>
      <h4>all recipes</h4>
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </div>
  );
}

export default AllRecipes;
