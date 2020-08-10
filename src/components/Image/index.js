import React from 'react';
import Img from 'gatsby-image';
import Home from './home';
import Logo from './logo';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ className, data = { image: { childImageSharp: {} } } }) => (
  <Img fluid={data.image.childImageSharp.fluid} className={className} />
);

export default Image;
export { Home, Image, Logo };
