import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { Categories } from '../components/Categories/Categories';
import { Sort } from '../components/Sort/Sort';
import { PizzaBlockSkeleton } from '../components/PizzaBlock/PizzaBlockSkeleton';
import { PizzaBlock } from '../components/PizzaBlock/PizzaBlock';
import { Pagination } from '../components/Pagination/Pagination';

import { SearchContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';

import { setCategoryId } from '../redux/slices/filterSlice';



export const HomePage = () => {
  const { categoryId, sortType, currentPage } = useSelector((state) => state.filterReducer);
  const dispatch = useDispatch();

  const [pizzas, setPizzas] = useState([]);
  const [isPizzasLoading, setIsPizzasLoading] = useState(true);

  const { searchInputQuery } = useContext(SearchContext);

  useEffect(() => {
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchInputQuery ? `&search=${searchInputQuery}` : '';
    const pagination = `page=${currentPage}&limit=4`;

    setIsPizzasLoading(true);
    axios.get(`https://62a89f79ec36bf40bdaa96f2.mockapi.io/pizzas?${pagination}&${category}&sortBy=${sortBy}&order=${order}${search}`)
      .then( res => {
        setPizzas(res.data);
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
          onClickCategory={(i) => dispatch(setCategoryId(i))}
        />

        <Sort />
      </div>

      <h2 className="content__title">Всі піцци</h2>

      <div className="content__items">
        { isPizzasLoading ? skeletonsItems : pizzasItems }
      </div>

      <Pagination />
    </div>
  );
};
