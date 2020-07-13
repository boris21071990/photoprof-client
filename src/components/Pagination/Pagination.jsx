import React from 'react';
import { usePaginated } from '@makotot/paginated'

import * as S from './Pagination.styled';

const Pagination = ({ currentPage = 1, totalPages = 0, handlePageChange = () => {} }) => {
    const { pages } = usePaginated({ currentPage: currentPage, totalPage: totalPages });

    return (
        <S.Wrapper>
            {pages.map((page, index) => (
                page == currentPage ? <S.CurrentPage key={index}>{currentPage}</S.CurrentPage> : <S.Page key={index} onClick={() => handlePageChange(page)}>{page}</S.Page>
            ))}
        </S.Wrapper>
    );
};

export default Pagination;
