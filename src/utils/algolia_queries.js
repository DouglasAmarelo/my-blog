const postsQuery = `
	{
		posts: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }){
			edges {
				node {
					objectID: id
					fields {
						slug
					}
					frontmatter {
						title
						background
						category
						date_timestamp: date
						date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
						description
					}
					timeToRead
					excerpt(pruneLength: 5000)
				}
			}
		}
	}
`;

const dateToTimestamp = dateTimestamp => parseInt((new Date(dateTimestamp).getTime() / 1000).toFixed(0));

const flatten = arr => arr.map(({ node: { frontmatter, ...rest } }) => ({
	...frontmatter,
	date_timestamp: dateToTimestamp(frontmatter.date_timestamp),
	...rest,
}));

const settings = { attributesToSnippet: [`excerpt:20`] };

const queries = [
	{
		query: postsQuery,
		transformer: ({ data }) => flatten(data.posts.edges),
		indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
		settings,
	},
];

module.exports = queries;
