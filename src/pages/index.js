import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<PostItem
			slug="/about"
			background="#d0d"
			category="Misc"
			date="29 de Dezembro de 2019"
			timeToRead="5"
			title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
			description="Vero nobis labore odio ut suscipit et placeat aliquid impedit exercitationem nesciunt, pariatur voluptates beatae aut assumenda"
		/>
	</Layout>
);

export default IndexPage;
