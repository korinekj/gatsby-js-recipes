import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

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
  console.log(props);

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

  return (
    <div>
      <h4>{title}</h4>
    </div>
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
