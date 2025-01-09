exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(`
		query {
			allContentfulProject {
				nodes {
					slug
				}
			}
		}
	`);

	result.data.allContentfulProject.nodes.forEach((node) => {
		createPage({
			path: `/portfolio/${node.slug}`,
			component: require.resolve("./src/templates/portfolio-item.js"),
			context: {
				slug: node.slug,
			},
		});
	});
};
