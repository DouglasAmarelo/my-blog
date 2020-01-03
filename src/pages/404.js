import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { MainWrapper, MainContent } from '../components/styles/main'

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<MainWrapper>
			<MainContent>
				<h1>NOT FOUND</h1>
				<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
			</MainContent>
		</MainWrapper>
	</Layout>
)

export default NotFoundPage
