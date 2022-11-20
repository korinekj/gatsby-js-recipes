import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as styles from './gallery.module.scss';

const query = graphql`
  query {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: { grayscale: true }
            width: 200
            height: 200
          )
        }
      }
    }
  }
`;

function Gallery() {
  const data = useStaticQuery(query);

  // const nodes = data.allFile.nodes;
  const {
    allFile: { nodes },
  } = data;

  return (
    <div className={styles.wrap}>
      {nodes.map((img: any, index: number) => {
        const { name } = img;

        const pathToImage = getImage(img);

        return (
          // eslint-disable-next-line react/no-array-index-key
          <article key={index}>
            <GatsbyImage
              image={pathToImage!}
              alt={img.name}
              className={styles.test}
            />
            <p className={styles.p}>{name}</p>
          </article>
        );
      })}
    </div>
  );
}

export default Gallery;
