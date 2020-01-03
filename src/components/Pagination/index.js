import React from 'react';
import PropTypes from 'prop-types';

import getThemeColor from '../../utils/getThemeColor';

import { LeftArrowAlt as PrevPage } from 'styled-icons/boxicons-regular/LeftArrowAlt';
import { RightArrowAlt as Nextpage } from 'styled-icons/boxicons-regular/RightArrowAlt';

import * as S from './styled';

const Pagination = ({ isFirstPage, isLastPage, currentPage, numPages, prevPage, nextPage }) => {
	return(
		<S.PaginationWrapper>
			{!isFirstPage && (
				<S.PaginationLink
					to={prevPage}
					cover
					direction="left"
					bg={getThemeColor()}
				>
					<PrevPage />
					página anterior
				</S.PaginationLink>
			)}

			<p>
				{currentPage} de {numPages}
			</p>

			{!isLastPage && (
				<S.PaginationLink
					to={nextPage}
					cover
					direction="right"
					bg={getThemeColor()}
				>
					próxima página
					<Nextpage />
				</S.PaginationLink>
			)}
		</S.PaginationWrapper>
	);
};

Pagination.propTypes = {
	isFirstPage: PropTypes.bool.isRequired,
	isLastPage : PropTypes.bool.isRequired,
	currentPage: PropTypes.number.isRequired,
	numPages   : PropTypes.number.isRequired,
	prevPage   : PropTypes.string,
	nextPage   : PropTypes.string,
};

export default Pagination;
