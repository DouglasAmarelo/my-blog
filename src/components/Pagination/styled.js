import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const iconSize = '18px';

export const PaginationWrapper = styled.section`
	align-items: center;
	border-top: 1px solid var(--borders);
	color: var(--texts);
	display: flex;
	justify-content: space-between;
	padding: 1.5rem 3rem;

	${media.lessThan('large')`
		border: none;
		font-size: .8rem;
		padding: 1rem;
	`};
`;

export const PaginationLink = styled(AniLink)`
	color: var(--texts);
	display: block;
	text-decoration: none;
	transition: color .5s;

	svg {
		height: ${iconSize};
		width: ${iconSize};
	}

	&:hover { color: var(--highlight); }
`;
