import { graphql } from "gatsby";
import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";

export const query = graphql`
  query {
    allContentfulPage(limit: 1, skip: 0) {
      nodes {
        title
        description {
          description
        }
        images {
					sizes(quality: 90) {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            resizingBehavior: SCALE
            width: 500


          )
					}
        }
      }
    }
  }
`;


const AboutPage = ({ data }) => {
  const aboutPageItems = data.allContentfulPage.nodes;

  console.log(aboutPageItems); // en console log för att kolla datan

  return (
    <Layout>
      {aboutPageItems.map((item) => {
        const image = getImage(item.images[0]);
        return (
          <div key={item.title}>
            <h1>{item.title}</h1>
            <p>{item.description.description}</p>
            {image && <GatsbyImage image={image} alt={item.title} />}
          </div>
        );
      })}
    </Layout>
  );
};

export const Head = () => <Seo title="About Page" />;

export default AboutPage;



// query MyQuery {
//   contentfulPage(slug: {eq: "about"}) {
//     id
//     description {
//       description
//     }
//     images {
//       gatsbyImageData
//     }
//   }
// }


// import React from "react";
// import Layout from "./layout";

// const AboutPage = ({ title, description }) => {
// 	return (
// 		<Layout>
// 			<h1>{title}</h1>
// 			<div>{description}</div>
// 		</Layout>
// 	);
// };

// export default AboutPage;
