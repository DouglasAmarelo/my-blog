import React from 'react';
import propTypes from 'prop-types';

import * as S from './styled';

const Pagination = ({ isFirstPage, isLastPage, currentPage, numPages, prevPage, nextPage }) => {
	return(
		<S.PaginationWrapper>
			{!isFirstPage && (
				<S.PaginationLink to={prevPage}>
					página anterior
				</S.PaginationLink>
			)}

			<p>
				{currentPage} de {numPages}
			</p>

			{!isLastPage && (
				<S.PaginationLink to={nextPage}>
					próxima página
				</S.PaginationLink>
			)}
		</S.PaginationWrapper>
	);
};

Pagination.propTypes = {
	isFirstPage: propTypes.bool.isRequired,
	isLastPage: propTypes.bool.isRequired,
	currentPage: propTypes.number.isRequired,
	numPages: propTypes.number.isRequired,
	prevPage: propTypes.string,
	nextPage: propTypes.string,
};

export default Pagination;
