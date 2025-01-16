import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout.js";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const ProjectTemplate = ({ data }) => {
	const { title, images, description } = data.contentfulProject;
	const gatsbyImage = getImage(images[0]);

	return (
		<Layout>
			<h1>{title}</h1>
			<p>{description.description}</p>
			<GatsbyImage image={gatsbyImage} alt="En alt text här hur"></GatsbyImage>
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
