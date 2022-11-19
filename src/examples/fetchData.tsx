import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
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

function FetchData() {
  // Destructuring
  const {
    site: {
      siteMetadata: {
        person: { name, age },
      },
    },
  } = useStaticQuery(getData);

  // const data = useStaticQuery(getData);
  // const author = data.site.siteMetadata.author;

  return (
    <div>
      {/* <h2>Name: {data.site.siteMetadata.person.name}</h2> */}
      {/* <h2>{author}</h2> */}

      <h2>
        Name: {name}, Age: {age}
      </h2>
    </div>
  );
}

export default FetchData;
