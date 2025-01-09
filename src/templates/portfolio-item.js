import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout.js";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProjectTemplate = ({ data }) => {
	const { title, image } = data.contentfulProject;
	const gatsbyImage = getImage(image);

	return (
		<Layout>
			<h1>{title}</h1>
			<GatsbyImage image={gatsbyImage} alt="En alt text här hur"></GatsbyImage>
		</Layout>
	);
};

export default ProjectTemplate;

export const query = graphql`
	query ($slug: String!) {
		contentfulProject(slug: { eq: $slug }) {
			title
			# images {
			# 	gatsbyImageData(layout: CONSTRAINED, width: 800, placeholder: BLURRED)
			# }
			images {
				gatsbyImageData(layout: CONSTRAINED, width: 800, placeholder: BLURRED)
			}
		}
	}
`;
