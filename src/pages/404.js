import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout";
import Seo from "../components/seo"
import { notFoundContainer, text, projectlinks } from "../styles/404.module.css"

const NotFoundPage = () => {
  return (
    <Layout>
    <main>
      <div className={notFoundContainer}>
      <h1 className={text}>404 Page not found</h1>
        <Link className={projectlinks} to="/">Back to home</Link>
        </div>
      </main>
      </Layout>
  )
}

export default NotFoundPage
export const Head = () => <Seo title="Not Found" />;
