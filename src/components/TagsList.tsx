import React from 'react';

interface Props {
  recipes: {}[];
}

function TagsList(props: Props) {
  const { recipes } = props;

  console.log(recipes);

  return <div>this is tagslist</div>;
}

export default TagsList;
