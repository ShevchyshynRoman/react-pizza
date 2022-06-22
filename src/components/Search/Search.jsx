import React, { useContext } from 'react';
import styles from './Search.module.scss';
import { SearchContext } from '../../App';

export const Search = () => {
  const { searchInputQuery, setSearchInputQuery } = useContext(SearchContext);

  return (
    <div className={styles.search_block}>
      <input
        value={searchInputQuery}
        onChange={e => setSearchInputQuery(e.target.value)}
        type='text'
        placeholder='Пошук піци...'
        className={styles.input}
      />
      <svg className={styles.icon_search} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 32 32" id="Editable-line" version="1.1" viewBox="0 0 32 32"><circle cx="14" cy="14" fill="none" id="XMLID_42_" r="9" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/><line fill="none" id="XMLID_44_" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="27" x2="20.366" y1="27" y2="20.366"/></svg>
      {searchInputQuery && (
        <svg onClick={() => setSearchInputQuery('')} className={styles.icon_close} viewBox="0 0 512 512" width="512px"><path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/></svg>
      )}
    </div>
  );
};
