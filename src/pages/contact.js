import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { container, contentWrapper, textContainer, socialLink, imgOval, imageContainer } from "../styles/contact.module.css";

export const query = graphql`
  query {
    contentfulPage(slug: { eq: "contact" }) {
      title
      description {
        description
      }
      images {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 500
          )
        }
      socialLinks
    }
  }
`;

const ContactPage = ({ data }) => {
  const contactPageItems = data.contentfulPage;

  return (
    <Layout>
      <div key={contactPageItems} className={container}>
        <div className={contentWrapper}>
          <div className={textContainer}>
            <h1>{contactPageItems.title}</h1>
            <h3>{contactPageItems.description.description}</h3>

            {contactPageItems.socialLinks && (
              <a
                className={socialLink}
                href={contactPageItems.socialLinks}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            )}

          </div>
          <div className={imageContainer}>
             {contactPageItems.images.map((img, index) => {
                          const image = getImage(img);
                          return (
                            <GatsbyImage
                              key={index}
                              image={image}
                              alt={`${contactPageItems.title} image ${index + 1}`}
                              className={imgOval}
                            />
                          );
                        })}
              </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Contact Page" />;

export default ContactPage;
