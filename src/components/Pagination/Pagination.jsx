import React from 'react';
import ReactPaginate from "react-paginate";
import styles from './Paggination.module.scss';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/filterSlice';

export const Pagination = () => {
  const dispatch = useDispatch();

  const changePage = (event) => {
    dispatch(setCurrentPage(event.selected + 1))
  }

  return (
    <ReactPaginate
      className={styles.paginationBlock}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => changePage(event)}
      pageRangeDisplayed={4}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
  );
};
