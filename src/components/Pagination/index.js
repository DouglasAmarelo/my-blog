import React from 'react';
import PropTypes from 'prop-types';

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
	isFirstPage: PropTypes.bool.isRequired,
	isLastPage : PropTypes.bool.isRequired,
	currentPage: PropTypes.number.isRequired,
	numPages   : PropTypes.number.isRequired,
	prevPage   : PropTypes.string,
	nextPage   : PropTypes.string,
};

export default Pagination;
