import React from 'react';
import setupTags from '../utils/setupTags';

interface Props {
  recipes: { content: { tags: string[] } }[];
}

function TagsList(props: Props) {
  const { recipes } = props;

  const newTags = setupTags(recipes);

  return (
    <div>
      {newTags.map((tag, index) => {
        console.log(tag);
        // eslint-disable-next-line react/no-array-index-key
        return <p key={index}>{tag}</p>;
      })}
    </div>
  );
}

export default TagsList;
