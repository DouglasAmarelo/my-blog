import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';

export const PostItemLink = styled(Link)`
	color: var(--texts);
	display: flex;
	text-decoration: none;

	${media.lessThan('large')`
		align-items: flex-start;
	`};

	body#grid & { background-color: var(--background); }

	&:hover { color: var(--highlight); }
`;

export const PostItemWrapper = styled.section`
	align-items: center;
	border-bottom: 1px solid var(--borders);
	display: flex;
	padding: 2rem 3rem;
	width: 100%;

	${media.lessThan('large')`
		padding: 2rem 1.5rem;
	`};

	body#grid & {
		border: none;
		flex-direction: column;
		justify-content: center;
		padding: 2rem 1rem;

		${media.lessThan('large')`
			align-items: flex-start;
		`};
	}
`;

export const PostItemTag = styled.div`
	align-items: center;
	background-color: ${({ background }) => background ? background : '#000'};
	color: var(--postColor);
	display: flex;
	font-size: 1.3rem;
	font-weight: 700;
	justify-content: center;
	text-transform: uppercase;

	${media.greaterThan('large')`
		border-radius: 50%;
		min-height: 90px;
		min-width: 90px;
	`};

	${media.lessThan('large')`
		font-size: 1rem;
		min-width: 80px;
		padding: .2rem .5rem;
	`};

	body#grid & { margin-bottom: 1.5rem; }
`;

export const PostItemInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 1.5rem;

	body#grid & {
		${media.lessThan('large')`
			margin-left: 0;
		`};
	}
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
