import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { container, card } from "../../styles/portfolio.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const query = graphql`
  query {
    allContentfulProject {
      nodes {
        title
        slug
        description {
          description
        }
        images {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 800
          )
        }
      }
    }
  }
`;
const PortfolioPage = ({ data }) => {
  const items = data.allContentfulProject.nodes;

  return (
    <Layout>
      <div className={container}>
        {items.map((item) => (
          <div key={item.slug} className={card}>
            <h1>{item.title}</h1>
            {item.images.map((image, index) => {
              const imageData = getImage(image);
              return (
                <GatsbyImage
                  key={index}
                  image={imageData}
                  alt={`Image for ${item.title}`}
                />
              );
            })}

            <a href={`/portfolio/${item.slug}`}>View More</a>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Portfolio" />;

export default PortfolioPage;
