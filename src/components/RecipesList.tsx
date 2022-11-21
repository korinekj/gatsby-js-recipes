import React from 'react';

interface Props {
  recipes: {}[];
}

function RecipesList(props: Props) {
  const { recipes } = props;

  console.log(recipes);

  return <div>this is recipeslist</div>;
}

export default RecipesList;
