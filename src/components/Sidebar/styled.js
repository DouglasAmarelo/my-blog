import styled from 'styled-components';
import media from 'styled-media-query';

export const SidebarWrapper = styled.aside`
	align-items: center;
	background-color: var(--mediumBackground);
	border-right: 1px solid var(--borders);
	display: flex;
	flex-direction: column;
	padding: 2rem;
	position: fixed;
	text-align: center;
	z-index: 5;

	${media.greaterThan('large')`
		height: 100vh;
		width: 20rem;
	`};

	${media.lessThan('large')`
		align-items: flex-start;
		padding: 1rem 2rem;
		width: 100%;
	`};
`;
