import { graphql } from "gatsby";
import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import {container} from "../styles/index.module.css"

export const query = graphql`
  query {
    contentfulPage(slug: {eq: "/"}) {
        title
        description {
          description
        }
        images {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            resizingBehavior: SCALE
            width: 400
          )
        }
      }
    }
`;

const HomePage = ({ data }) => {
  const homePageItems = data.contentfulPage;

  console.log(homePageItems); // en console log för att kolla datan

  return (
    <Layout>
      <div key={homePageItems} className ={container}>
        <h1>{homePageItems.title}</h1>
        <p>{homePageItems.description.description}</p>
        <div>
      {homePageItems.images.map((img, index) => {
        const image = getImage(img);
        return (
          <GatsbyImage
          key={index}
          image={image}
          aly={`${homePageItems.title} image ${index + 1}`}
          />
        );
      })}
      </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default HomePage;



// import { Link } from "gatsby";
// import * as React from "react";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import Layout from "../components/layout.js"
// import Seo from '../components/seo.js'

// export const query = graphql `
// query {
//   allContentfulPage(limit: 1, skip: 1) {
//     nodes {
//       title
//       description {
//         description
//       }
//       images {
//         gatsbyImageData(
//           layout: CONSTRAINED
//           placeholder: BLURRED
//           resizingBehavior: SCALE
//           width: 500
//         )
//       }
//     }
//   }
// }`;


// const HomePage = ({data}) => {

// const homePageItems = data.allContentfulPage.nodes;

//   return (
//     <Layout>
//       {homePageItems.map((item) => {
//             const image = getImage(item.images);
//       return (
//         <div>
//         <h1>
//           {item.title}
//         </h1>
//         <p>
//           {item.description.description}
//         </p>
//         {image && <GatsbyImage image={image} />}
//         </div>
//       )})
//     }
//     </Layout>
//   )

// }

// export const Head = () => <Seo title="Home Page" />

// export default HomePage;
