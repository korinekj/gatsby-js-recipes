import React from 'react';
import { Link } from 'gatsby';
import setupTags from '../utils/setupTags';

interface Props {
  recipes: { content: { tags: string[] } }[];
}

function TagsList(props: Props) {
  const { recipes } = props;

  const newTags = setupTags(recipes);
  console.log(newTags);

  return (
    <div className='tag-container'>
      <h4>recipes</h4>
      <div className='tags-list'>
        {newTags.map((tag, index) => {
          console.log(tag);
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Link to={`/${tag[0]}`} key={index}>
              {`${tag[0]} (${tag[1]})`}
              <br />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TagsList;
