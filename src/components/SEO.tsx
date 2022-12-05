import React from 'react';

import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  title: string;
  description?: string;
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

function SEO(props: Props) {
  const { title, description } = props;

  const { site } = useStaticQuery(query);

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
      ]}
    >
      SEO
    </Helmet>
  );
}

SEO.defaultProps = {
  description: undefined,
};

export default SEO;
