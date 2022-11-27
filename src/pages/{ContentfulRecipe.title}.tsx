import React from 'react';

function RecipeTemplate(props) {
  console.log(props);

  return (
    <div>
      <h4>{props.params.title}</h4>
    </div>
  );
}

export default RecipeTemplate;
