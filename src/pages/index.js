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
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            resizingBehavior: SCALE
            width: 400
          )
        }
      }
    }
  }
`;

const HomePage = ({ data }) => {
  const homePageItems = data.allContentfulPage.nodes;

  console.log(homePageItems); // en console log för att kolla datan

  return (
    <Layout>
      {homePageItems.map((item) => {
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
