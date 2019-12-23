import styled from 'styled-components';
import { Link } from 'gatsby'

export const MenuLinksWrapper = styled.nav``;

export const MenuLinksList = styled.ul`
	font-size: 1.2rem;
	font-weight: 300;
`;

export const MenuLinksItem = styled.li`
	padding: .5em 0;

	.active {
		color: #1fa1f2;
	}
`;

export const MenuLinksLink = styled(Link)`
	color: #8899ac;
	text-decoration: none;
	transition: color .5s;

	&:hover {
		color: #1fa1f2;
	}
`;
