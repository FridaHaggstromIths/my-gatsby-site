import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout.js";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { container, card } from "../styles/portfolio.module.css";


const ProjectTemplate = ({ data }) => {
	const { title, images, description } = data.contentfulProject;
	const gatsbyImage = getImage(images[0]);

	return (
		<Layout>
			<div className={container}>
				<div className={card}>
			<h1>{title}</h1>
			<p>{description.description}</p>
			<GatsbyImage image={gatsbyImage} alt={`Image for ${title}`}></GatsbyImage>
			</div>
			</div>
		</Layout>
	);
};

export default ProjectTemplate;

export const query = graphql`
	query ($slug: String!) {
		contentfulProject(slug: { eq: $slug }) {
			title
			description {
      description
    }
			images {
				gatsbyImageData(layout: CONSTRAINED, width: 800, placeholder: BLURRED)
			}
			images {
				gatsbyImageData(layout: CONSTRAINED, width: 800, placeholder: BLURRED)
			}
		}
	}
`;
