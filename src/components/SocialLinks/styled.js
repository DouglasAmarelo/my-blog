import styled from 'styled-components';

const iconSize = '22px';

export const SocialLinksWrapper = styled.nav`
	margin: 2rem auto;
	width: 100%;
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
	color: #8899a6;
	text-decoration: none;
	transition: color .5s;

	&:hover { color: #1fa1f2; }
`;

export const IconWrapper = styled.div`
	fill: #bbb;
	height: ${iconSize};
	width: ${iconSize};
`;
