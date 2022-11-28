import React from 'react';
import { graphql } from 'gatsby';

interface Props {
  data: {
    contentfulRecipe: {
      title: String;
      cookTime: number;
    };
  };
}

function RecipeTemplate(props: Props) {
  console.log(props);

  const {
    data: {
      contentfulRecipe: { title, cookTime },
    },
  } = props;

  console.log(title);

  return (
    <div>
      <h4>{title}</h4>
      <p>Cooktime: {cookTime}</p>
    </div>
  );
}

export const query = graphql`
  query GetSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
    }
  }
`;

export default RecipeTemplate;
