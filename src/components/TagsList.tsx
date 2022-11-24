import React from 'react';
import setupTags from '../utils/setupTags';

interface Props {
  recipes: {}[];
}

function TagsList(props: Props) {
  const { recipes } = props;
  console.log(recipes);

  const newTags = setupTags(recipes);

  console.log(newTags);

  return (
    <div>
      {newTags.map(tag => (
        <p>{tag}</p>
      ))}
    </div>
  );
}

export default TagsList;
