import React from 'react';
import { graphql } from 'gatsby';

interface PropTypes {
  data: {
    site: {
      siteMetadata: { author: string };
    };
  };
}

function Testing(props: PropTypes) {
  const {
    data: {
      site: {
        siteMetadata: { author },
      },
    },
  } = props;

  return (
    <div>
      <h2>author: {author}</h2>
    </div>
  );
}

export const data = graphql`
  query firstQuery {
    site {
      siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`;

export default Testing;
