import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  const metaDescription = description || data.site.siteMetadata.description;

  return (
    <>
      <title>{title} | {data.site.siteMetadata.title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
    </>
  )
}

export default Seo


// import * as React from 'react'
// import { graphql, useStaticQuery } from 'gatsby'

// const Seo = ({ title }) => {
//   const data = useStaticQuery(graphql`
//     query {
//       site {
//         siteMetadata {
//           title
//           description
//           siteUrl
//         }
//       }
//     }
//   `)

//   return (
//     <title>{title} | {data.site.siteMetadata.title}</title>
//   )
// }

// export default Seo
