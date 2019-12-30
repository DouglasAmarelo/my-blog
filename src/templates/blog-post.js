import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import * as S from '../components/Post/styled';

const BlogPost = ({ data }) => {
	const post = data.markdownRemark;
	const postData = post.frontmatter;

	return(
		<Layout>
			<SEO title={postData.title} />

			<S.PostHeader>
				<S.PostDate>
					{postData.date} - {post.timeToRead} min de leitura
				</S.PostDate>

				<S.PostTitle>
					{postData.title}
				</S.PostTitle>

				<S.PostDescription>
					{postData.description}
				</S.PostDescription>
			</S.PostHeader>

			<S.MainContent>
				<div dangerouslySetInnerHTML={{ __html: post.html }}></div>
			</S.MainContent>

		</Layout>
	);
};

export const query = graphql`
	query Post($slug: String!) {
		markdownRemark(fields: {slug: {eq: $slug}}) {
			frontmatter {
				title,
				description,
				date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
			}
			html
			timeToRead
		}
	}
`;

export default BlogPost;
