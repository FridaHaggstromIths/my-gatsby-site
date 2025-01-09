import * as React from "react";
import Layout from "../../components/layout";
import { Link, graphql, useStaticQuery } from "gatsby";
import Seo from "../../components/seo.js";
import { container } from "../../styles/portfolio.module.css";

const PortfolioPage = () => {
	const data = useStaticQuery(graphql`
query {
  allContentfulProject {
    nodes {
      title
      slug
    }
  }
}
`);

const items = data.allContentfulProject.nodes;

	return (
		<Layout>
			<div className={container}>
				<h1>Välkommen till min portfoliosida!</h1>
				<ul>
					{items.map((item) => (
						<li key={item.slug}>
							<Link to={`/portfolio/${item.slug}`}>{item.title}</Link>
						</li>
					))}
				</ul>
			</div>
		</Layout>
	);
};

export const Head = () => <Seo title="Portfolio"></Seo>;

export default PortfolioPage;


// Query till ett specifikt item

// query MyQuery {
//   allContentfulProject {
//     nodes {
//       title
//       id
//     }
//   }
//   contentfulProject(id: {eq: "f613329d-1c4a-5c65-ab7b-d044d5624eb7"}) {
//     title
//   }
// }
