import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from './index';

export default ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "icon_white_blue.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return <Image className={className} data={data} />;
};
