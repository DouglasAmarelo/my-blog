import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import { MainContent, MainWrapper } from '../components/styles/main';

const AboutPage = () => (
	<Layout>
		<SEO title="About"/>

		<MainWrapper>
			<MainContent>
				<h1>About</h1>
			</MainContent>
		</MainWrapper>
	</Layout>
);

export default AboutPage;
