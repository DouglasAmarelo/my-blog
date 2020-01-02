import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';

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

export const PaginationLink = styled(Link)`
	color: var(--texts);
	text-decoration: none;
	transition: color .5s;

	&:hover { color: var(--highlight); }
`;
