import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import setupTags from '../utils/setupTags';

interface Props {
  data: { allContentfulRecipe: { nodes: [] } };
}

function Tags(props: Props) {
  const {
    data: {
      allContentfulRecipe: { nodes: tags },
    },
  } = props;

  const newTags = setupTags(tags);

  console.log(newTags);

  return (
    <Layout>
      <main className='page'>
        <section className='tags-page'>
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            return (
              // eslint-disable-next-line react/no-array-index-key
              <Link to={text} key={index} className='tag'>
                <h5>{text}</h5>
                <p>{`${value} recipe`}</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query {
    allContentfulRecipe(sort: { title: ASC }) {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Tags;
