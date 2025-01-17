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
            resizingBehavior: SCALE
            width: 400
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


// import { graphql } from "gatsby";
// import * as React from "react";
// import Layout from "../../components/layout";
// import Seo from "../../components/seo";
// import { container } from "../../styles/portfolio.module.css";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

// export const query = graphql`
//   query {
//     allContentfulProject {
//       nodes {
//         title
//         slug
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
//   }
// `;

// const PortfolioPage = ({ data }) => {
//   const items = data.allContentfulProject.nodes;

//   return (
//     <Layout>
//       <div className={container}>
//         <ul>
//           {items.map((item) => (
//             <li key={item.slug}>
//               <h1>{item.title}</h1>
//               <p>{item.description.description}</p>
//               {item.images.map((image, index) => {
//                 const imageData = getImage(image);
//                 return (
//                   <GatsbyImage
//                     key={index}
//                     image={imageData}
//                     alt={`Image for ${item.title}`}
//                   />
//                 );
//               })}

//               <a href={`/portfolio/${item.slug}`}>View More</a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </Layout>
//   );
// };

// export const Head = () => <Seo title="Portfolio" />;

// export default PortfolioPage;












// import { graphql } from "gatsby";
// import * as React from "react";
// import Layout from "../../components/layout";
// import Seo from "../../components/seo";
// import { container } from "../../styles/portfolio.module.css";

// export const query = graphql`
//   query {
//     allContentfulProject {
//       nodes {
//         title
//         slug
//         description {
//           description
//         }
// 				images {
//           gatsbyImageData(
//             layout: CONSTRAINED
//             placeholder: BLURRED
//             resizingBehavior: SCALE
//             width: 400
//           )
//         }
//       }
//     }
//   }
// `;

// const PortfolioPage = ({ data }) => {
//   const items = data.allContentfulProject.nodes;

//   return (
//     <Layout>
//       <div className={container}>
//         <ul>
//           {items.map((item) => (
//             <li key={item.slug}>
//               <h1>{item.title}</h1>
//               <p>{item.description.description}</p>
//               <a href={`/portfolio/${item.slug}`}>View More</a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </Layout>
//   );
// };

// export const Head = () => <Seo title="Portfolio" />;

// export default PortfolioPage;


// import { graphql } from "gatsby";
// import * as React from "react";
// import Layout from "../../components/layout";
// import Seo from "../../components/seo";
// import { container } from "../../styles/portfolio.module.css";

// export const query = graphql`
//   query {
//     allContentfulProject {
//       nodes {
//         title
//         slug
//         description {
//           description
//         }
//       }
//     }
//   }
// `;

// const PortfolioPage = ({ data }) => {
//   const items = data.allContentfulProject.nodes;

//   return (
//     <Layout>
//       <div className={container}>

//         <ul>
//           {items.map((item) => (
//             <li key={item.slug}>
//               <a href={`/portfolio/${item.slug}`}>{item.title}</a>
//             </li>
//           ))}
//         </ul>
//       </div>
// 			<h1>{items.title}</h1>
// 			<p>{items.description.description}</p>
//     </Layout>
//   );
// };

// export const Head = () => <Seo title="Portfolio" />;

// export default PortfolioPage;



// import * as React from "react";
// import Layout from "../../components/layout";
// import { Link, graphql, useStaticQuery } from "gatsby";
// import Seo from "../../components/seo.js";
// import { container } from "../../styles/portfolio.module.css";

// const PortfolioPage = () => {
// 	const data = useStaticQuery(graphql`
// 		query {
//  			 allContentfulProject {
//     		nodes {
//       		title
// 					description {
//       description
//     }
//       		slug
//    			 }
//   			}
// 			}
// 	`);

// const items = data.allContentfulProject.nodes;

// 	return (
// 		<Layout>
// 			<div className={container}>
// 				<h1>{items.title}</h1>
// 				<ul>
// 					{items.map((item) => (
// 						<li key={item.slug}>
// 							<Link to={`/portfolio/${item.slug}`}>{item.title}</Link>
// 						</li>
// 					))}
// 				</ul>
// 				<p>{items.description.description}</p>
// 			</div>
// 		</Layout>
// 	);
// };

// export const Head = () => <Seo title="Portfolio"></Seo>;

// export default PortfolioPage;
