import React from 'react';
import { Link } from 'gatsby';
import slugify from 'slugify';
import setupTags from '../utils/setupTags';

interface Props {
  recipes: { content: { tags: string[] } }[];
}

function TagsList(props: Props) {
  const { recipes } = props;

  const newTags = setupTags(recipes);

  return (
    <div className='tag-container'>
      <h4>recipes</h4>
      <div className='tags-list'>
        {newTags.map((tag, index) => {
          console.log(tag);
          const slugTag = slugify(tag[0], { lower: true });
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Link to={`/tags/${slugTag}`} key={index}>
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
