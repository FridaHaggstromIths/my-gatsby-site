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
