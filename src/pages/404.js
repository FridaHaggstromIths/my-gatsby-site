import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout";
import Seo from "../components/seo"
import { text, navlink, projectlinks } from "../styles/404.module.css"

const NotFoundPage = () => {
  return (
    <Layout>
    <main>
      <h1 className={text}>404 Page not found</h1>
        <br />
        <p className={navlink}><Link className = {projectlinks} to="/">Back to home</Link></p>
      </main>
      </Layout>
  )
}

export default NotFoundPage
export const Head = () => <Seo title="Not Found" />;
