import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const SkillsImg = ({ filename, alt, type }) => (
    <StaticQuery
        query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 100) {  
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
        render={(data) => {
            const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

            if (!image) return null;

            const imageFixed = image.node.childImageSharp.fixed;
            return <Img className="logo-img" alt={alt} fixed={imageFixed} />;
        }}
    />
);

SkillsImg.propTypes = {
    filename: PropTypes.string,
    alt: PropTypes.string,
};

export default SkillsImg;
