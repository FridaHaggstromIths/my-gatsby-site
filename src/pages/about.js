import { graphql } from "gatsby";
import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { container, contentWrapper, imageContainer, textContainer, imgOval } from "../styles/index.module.css";

export const query = graphql`
query {
  contentfulPage(slug: {eq: "about"}) {
    title
    description {
      description
    }
    images {
      gatsbyImageData(
        layout: CONSTRAINED
        placeholder: BLURRED
        resizingBehavior: SCALE
        width: 500
      )
    }
  }
}
`;

const AboutPage = ({ data }) => {
  const aboutPageItem = data.contentfulPage;

  return (
    <Layout>
      <div key={aboutPageItem.title} className={container}>
        <div className={contentWrapper}>
          <div className={imageContainer}>
            {aboutPageItem.images.map((img, index) => {
              const image = getImage(img);
              return (
                <GatsbyImage
                  key={index}
                  image={image}
                  alt={`${aboutPageItem.title} image ${index + 1}`}
                  className={imgOval}
                />
              );
            })}
          </div>
          <div className={textContainer}>
            <h1>{aboutPageItem.title}</h1>
            <h3>"{aboutPageItem.description.description}"</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="About Page" />;

export default AboutPage;
