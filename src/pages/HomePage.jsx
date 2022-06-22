import React, { useContext, useEffect, useState } from 'react';

import { Categories } from '../components/Categories/Categories';
import { Sort } from '../components/Sort/Sort';
import { PizzaBlockSkeleton } from '../components/PizzaBlock/PizzaBlockSkeleton';
import { PizzaBlock } from '../components/PizzaBlock/PizzaBlock';
import { Pagination } from '../components/Pagination/Pagination';
import { SearchContext } from '../App';


export const HomePage = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isPizzasLoading, setIsPizzasLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({ name: 'популярності', sortProperty: 'rating' });
  const [currentPage, setCurrentPage] = useState(1);
  const { searchInputQuery } = useContext(SearchContext);

  useEffect(() => {
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchInputQuery ? `&search=${searchInputQuery}` : '';
    const pagination = `page=${currentPage}&limit=4`;

    setIsPizzasLoading(true);
    fetch(`https://62a89f79ec36bf40bdaa96f2.mockapi.io/pizzas?${pagination}&${category}&sortBy=${sortBy}&order=${order}${search}`)
      .then(res => res.json())
      .then((arr) => {
        setPizzas(arr);
        setIsPizzasLoading(false);
      })

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchInputQuery, currentPage])

  const skeletonsItems = [... new Array(6)].map((_, index) => (
    <PizzaBlockSkeleton
      key={index}
    />
  ))

  const pizzasItems = pizzas
    /*.filter(pizza => pizza.title.toLowerCase().includes(searchInputQuery.toLowerCase()))*/
    .map(pizza => (
    <PizzaBlock
      key={pizza.id}
      {...pizza}
    />
  ))

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categoryId={categoryId}
          onClickCategory={(i) => setCategoryId(i)}
        />

        <Sort
          sortType={sortType}
          onSortClick={(obj) => setSortType(obj)}
        />
      </div>

      <h2 className="content__title">Всі піцци</h2>

      <div className="content__items">
        { isPizzasLoading ? skeletonsItems : pizzasItems }
      </div>

      <Pagination
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
