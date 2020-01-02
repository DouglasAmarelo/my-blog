import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';

const iconSize = '20px';

export const MenuBarWrapper = styled.aside`
	align-items: center;
	background-color: var(--mediumBackground);
	border-left: 1px solid var(--borders);
	bottom: 0;
	display: flex;
	justify-content: space-between;
	position: fixed;
	right: 0;
	transition: background .5s;
	width: 100%;
	z-index: 5;

	${media.greaterThan('large')`
		flex-direction: column;
		height: 100vh;
		padding: 0.8rem 0;
		max-width: 3.75rem;
	`};

	${media.lessThan('large')`
		border-top: 1px solid var(--borders);
	`};
`;

export const MenuBarGroup = styled.div`
	display: flex;

	${media.greaterThan('large')`
		flex-direction: column;
	`};
`;

export const MenuBarLink = styled(Link)`
	display: block;

	&.active {
		span { color: var(--highlight); }
	}
`;

export const MenuBarItem = styled.span`
	color: var(--texts);
	cursor: pointer;
	display: block;
	height: 3.75rem;
	padding: 1.1rem;
	position: relative;

	${media.lessThan('large')`
		height: 3.2rem;
		padding: .9rem;
		width: 3.2rem;
	`};

	&:hover { color: var(--highlight); }

	&.light {
		color: #d4d400;

		&:hover { color: #e2e240; }
	}

	svg {
		height: ${iconSize};
		width: ${iconSize};
	}
`;
