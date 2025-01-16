import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { container, contentWrapper, textContainer, socialLink } from "../styles/contact.module.css";

export const query = graphql`
  query {
    contentfulPage(slug: { eq: "contact" }) {
      title
      description {
        description
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
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Contact Page" />;

export default ContactPage;


// import { graphql } from "gatsby";
// import * as React from "react";
// import Layout from "../components/layout";
// import Seo from "../components/seo";
// import { container, contentWrapper, textContainer} from "../styles/index.module.css";

// export const query = graphql`
//   query {
//   contentfulPage(slug: {eq: "contact"}) {
//     title
//     description {
//       description
//     }
//   }
// }
// `;

// const ContactPage = ({ data }) => {
//   const contactPageItems = data.contentfulPage;

//   return (
//     <Layout>
//       <div key={contactPageItems} className={container}>
//         <div className={contentWrapper}>
//           <div className={textContainer}>
//             <h3>{contactPageItems.title}</h3>
//             <h1>{contactPageItems.description.description}</h1>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export const Head = () => <Seo title="Contact Page" />;

// export default ContactPage;
