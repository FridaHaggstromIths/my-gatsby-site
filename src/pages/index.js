import { graphql } from "gatsby";
import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { container, imgOval, contentWrapper, textContainer, imageContainer } from "../styles/index.module.css";

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
            width: 500
          )
        }
      }
    }
`;

const HomePage = ({ data }) => {
  const homePageItems = data.contentfulPage;

  return (
    <Layout>
      <div key={homePageItems} className={container}>
        <div className={contentWrapper}>
          <div className={imageContainer}>
            {homePageItems.images.map((img, index) => {
              const image = getImage(img);
              return (
                <GatsbyImage
                  key={index}
                  image={image}
                  alt={`${homePageItems.title} image ${index + 1}`}
                  className={imgOval}
                />
              );
            })}
          </div>
          <div className={textContainer}>
            <h3>{homePageItems.title}</h3>
            <h1>"{homePageItems.description.description}"</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default HomePage;



// import { graphql } from "gatsby";
// import * as React from "react";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import Layout from "../components/layout";
// import Seo from "../components/seo";
// import {container, imgOval} from "../styles/index.module.css"

// export const query = graphql`
//   query {
//     contentfulPage(slug: {eq: "/"}) {
//         title
//         description {
//           description
//         }
//         images {
//           gatsbyImageData(
//             layout: CONSTRAINED
//             placeholder: BLURRED
//             resizingBehavior: SCALE
//             width: 400
//           )
//         }
//       }
//     }
// `;

// const HomePage = ({ data }) => {
//   const homePageItems = data.contentfulPage;

//   return (
//     <Layout>
//       <div key={homePageItems} className ={container}>
//         <h3>{homePageItems.title}</h3>
//         <h1>{homePageItems.description.description}</h1>
//         <div>
//       {homePageItems.images.map((img, index) => {
//         const image = getImage(img);
//         return (
//           <GatsbyImage
//           key={index}
//           image={image}
//           alt={`${homePageItems.title} image ${index + 1}`}
//           className={imgOval}
//           />
//         );
//       })}
//       </div>
//       </div>
//     </Layout>
//   );
// };

// export const Head = () => <Seo title="Home Page" />;

// export default HomePage;
