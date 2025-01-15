import { graphql } from "gatsby";
import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import {container} from "../styles/index.module.css"

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
        width: 640
      )
    }
  }
}
`;

const AboutPage = ({ data }) => {
  const aboutPageItem = data.contentfulPage;

  return (
    <Layout>
      <div key={aboutPageItem.title} className ={container}>
        <h1>{aboutPageItem.title}</h1>
        <p>{aboutPageItem.description.description}</p>
        <div>
          {aboutPageItem.images.map((img, index) => {
            const image = getImage(img);
            return (
              <GatsbyImage
                key={index}
                image={image}
                alt={`${aboutPageItem.title} image ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="About Page" />;

export default AboutPage;



// import { graphql } from "gatsby";
// import * as React from "react";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import Layout from "../components/layout";
// import Seo from "../components/seo";

// export const query = graphql`
// query {
//   contentfulPage(slug: {eq: "about"}) {
//     title
//     description {
//       description
//     }
//     images {
//       gatsbyImageData(
//         layout: CONSTRAINED
//         placeholder: BLURRED
//         resizingBehavior: SCALE
//         width: 500
//       )
//     }
//   }
// }

// `;


// const AboutPage = ({ data }) => {
//   console.log(data)
//   const aboutPageItems = data.contentfulPage;

//   console.log(aboutPageItems);

//   return (
//     <Layout>

//         const image = getImage(aboutPageItems.images[0]);
//         return (
//           <div>
//             <h1>{aboutPageItems.title}</h1>
//             <p>{aboutPageItems.description.description}</p>
//             {image && <GatsbyImage image={aboutPageItems.image} alt={aboutPageItems.title} />}
//           </div>
//         );

//     </Layout>
//   );
// };

// export const Head = () => <Seo title="About Page" />;

// export default AboutPage;



// query {
//   contentfulPage(slug: {eq: "about"}) {
//     title
//   }
// }

// # title
// # description {
// #   description
// # }
// # images {
// #   gatsbyImageData(
// #     layout: CONSTRAINED
// #     placeholder: BLURRED
// #     resizingBehavior: SCALE
// #     width: 500
// #   )
// # }


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
