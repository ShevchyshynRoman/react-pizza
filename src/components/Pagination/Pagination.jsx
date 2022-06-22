import React from 'react';
import ReactPaginate from "react-paginate";
import styles from './Paggination.module.scss';

export const Pagination = ({
  setCurrentPage,
}) => {
  return (
    <ReactPaginate
      className={styles.paginationBlock}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={event => setCurrentPage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
  );
};
