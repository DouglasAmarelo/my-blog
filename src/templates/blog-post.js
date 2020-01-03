import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import RecommendedPosts from '../components/RecommendedPosts';
import Comments from '../components/Comments';

import { MainContent, MainWrapper } from '../components/styles/main';
import * as S from '../components/Post/styled';

const BlogPost = ({ data, pageContext }) => {
	const post = data.markdownRemark;
	const postData = post.frontmatter;
	const { nextPost, previousPost } = pageContext;

	return(
		<Layout>
			<SEO title={postData.title} />

			<MainWrapper>
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

				<MainContent>
					<div dangerouslySetInnerHTML={{ __html: post.html }}></div>
				</MainContent>
			</MainWrapper>

			<RecommendedPosts
				next={nextPost}
				previous={previousPost}
			/>

			<Comments
				url={post.fields.slug}
				title={postData.title}
			/>
		</Layout>
	);
};

export const query = graphql`
	query Post($slug: String!) {
		markdownRemark(fields: {slug: {eq: $slug}}) {
			fields {
				slug
			}
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
