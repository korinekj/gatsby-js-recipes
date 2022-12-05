import React from 'react';

import { Helmet } from 'react-helmet';
import { useStaticQuery, graphlq } from 'gatsby';

interface Props {
  title: string;
  description: string;
}

function SEO(props: Props) {
  const { title, description } = props;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title}
      meta={[
        {
          name: 'description',
          content: description,
        },
      ]}
    >
      SEO
    </Helmet>
  );
}

export default SEO;
