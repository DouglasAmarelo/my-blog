import styled from 'styled-components';
import { Link } from 'gatsby';

export const PostItemLink = styled(Link)`
	color: var(--texts);
	display: flex;
	text-decoration: none;

	body#grid & { background-color: var(--background); }

	&:hover { color: var(--highlight); }
`;

export const PostItemWrapper = styled.section`
	align-items: center;
	border-bottom: 1px solid var(--borders);
	display: flex;
	padding: 2rem 3rem;
	width: 100%;

	body#grid & {
		border: none;
		flex-direction: column;
		justify-content: center;
		padding: 2rem 1rem;
	}
`;

export const PostItemTag = styled.div`
	align-items: center;
	background-color: ${({ background }) => background ? background : '#000'};
	border-radius: 50%;
	color: var(--postColor);
	display: flex;
	font-size: 1.3rem;
	font-weight: 700;
	justify-content: center;
	min-height: 90px;
	min-width: 90px;
	text-transform: uppercase;

	body#grid & { margin-bottom: 1.5rem; }
`;

export const PostItemInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 1.5rem;
`;

export const PostItemDate = styled.time`
	font-size: .9rem;
`;

export const PostItemTitle = styled.h1`
	font-size: 1.6rem;
	font-weight: 700;
	margin: .2rem 0 .5rem 0;

	body#grid & {
		line-height: 1.1;
		margin: .8rem 0;
	}
`;

export const PostItemDescription = styled.p`
	font-size: 1.2rem;
	font-weight: 300;
	line-height: 1.2rem;
`;
