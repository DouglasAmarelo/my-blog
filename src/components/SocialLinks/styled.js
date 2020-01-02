import styled from 'styled-components';
import media from 'styled-media-query';

const iconSize = '22px';

export const SocialLinksWrapper = styled.nav`
	margin: 2rem auto;
	width: 100%;

	${media.lessThan('large')`
		display: none;
	`};
`;

export const SocialLinksList = styled.ul`
	align-items: center;
	display: flex;
	justify-content: space-around;
	list-style: none;
`;

export const SocialLinksItem = styled.li`
	list-style: none;
`;

export const SocialLinksLink = styled.a`
	color: var(--texts);
	text-decoration: none;
	transition: color .5s;

	&:hover { color: var(--highlight); }
`;

export const IconWrapper = styled.div`
	fill: #bbb;
	height: ${iconSize};
	width: ${iconSize};
`;
