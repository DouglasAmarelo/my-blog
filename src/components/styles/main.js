import styled from 'styled-components';
import media from 'styled-media-query';

export const MainWrapper = styled.section`
	margin: auto;

	${media.greaterThan('large')`
		max-width: 70rem;
		padding: 0 5rem;
	`};

	${media.lessThan('large')`
		padding: 0 1.5rem;
	`};
`;

export const MainContent = styled.section`
	margin: auto;
	padding: 2rem 0;

	p,
	h1,
	h2,
	h3,
	h4,
	ul,
	ol,
	.tags,
	iframe,
	.button-post {
		color: var(--postColor);
		font-size: 1.25rem;
		font-weight: 300;
		letter-spacing: .069rem;
		line-height: 1.7;
		padding: 0 1.4rem;
		word-break: break-word;

		${media.lessThan('large')`
			padding: 0 1rem;
		`};
	}

	p { margin: 0 auto 1.6rem auto; }

	h1,
	h2,
	h3,
	h4,
	h5 {
		font-weight: 800;
		letter-spacing: .069rem;
		line-height: 1.4;
		margin: 2.4rem auto 1rem auto;
	}

	ul,
	ol {
		list-style: disc;
		margin: 0 auto 1.6rem auto;
		padding-left: 2.5rem;
	}

	li {
		padding: .625rem 0;

		& ul { margin: 0; }
	}

	p,
	li {
		code { word-wrap: break-word; }
	}

	img {
		display: block;
		margin: 1.875rem auto;
		max-width: 100%;
	}

	iframe {
		padding: 0 1.6rem 1.6rem 1.6rem;
		width: 100%;

		${media.lessThan('large')`
			padding: 0 1rem;
		`};
	}

	blockquote {
		border-left: .3rem solid var(--highlight);
		color: var(--postColor);
		margin: 3.125rem auto;
		padding: 0 1.875rem;
	}

	hr {
		border: 1px solid var(--borders);
		margin: 3rem auto;
	}

	#twitter-widget-0,
	.instagram-media,
	.twitter-tweet {
		margin: 20px auto!important;
	}

	h1 {
		font-size: 2.8rem;

		${media.lessThan('large')`
			font-size: 1.875rem;
		`};
	}

	h2 {
		font-size: 2.1rem;

		${media.lessThan('large')`
			font-size: 1.375rem;
		`};
	}

	h3 {
		font-size: 1.6rem;

		${media.lessThan('large')`
			font-size: 1.125rem;
		`};
	}

	h4 {
		font-size: 1.4rem;

		${media.lessThan('large')`
			padding: 0;
		`};
	}

	h5 { font-size: 1.2rem; }

	strong { font-weight: 700; }

	.gatsby-resp-image-background-image {
		opacity: 1!important;
		z-index: 2;
	}

	.gatsby-resp-image-image {
		box-shadow: none!important;
		color: transparent;
		transition: opacity .2s;

		&.lazyload { opacity: 0; }

		&.lazyloaded {
			opacity: 1;
			z-index: 3;
		}
	}

	.gatsby-highlight { padding: 0 1.6rem 1.6rem 1.6rem; }

	.instagram-media { margin: 1rem auto!important; }

	a {
		border-bottom: 1px dashed var(--highlight);
		color: var(--highlight);
		text-decoration: none;
		transition: opacity .5s;

		svg { color: var(--postColor); }

		&:hover { opacity: .8; }
	}
`;
