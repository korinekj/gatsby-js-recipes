import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface Props {
  recipes: {
    id: string;
    title: string;
    image: { gatsbyImageData: IGatsbyImageData };
    prepTime: number;
    cookTime: number;
  }[];
}

function RecipesList(props: Props) {
  const { recipes } = props;

  return (
    <div className='recipes-list'>
      {recipes.map(recipe => {
        const pathToImg = getImage(recipe.image);
        return (
          <article key={recipe.id}>
            <Link to={`/${recipe.title}`} className='recipe'>
              <GatsbyImage
                image={pathToImg!}
                alt={recipe.title}
                className='recipe-img'
              />
              <h5>{recipe.title}</h5>
              <p>
                Prep: {recipe.prepTime}min | Cook: {recipe.cookTime}min
              </p>
            </Link>
          </article>
        );
      })}
    </div>
  );
}

export default RecipesList;
