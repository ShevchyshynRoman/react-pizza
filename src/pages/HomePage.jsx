import React, { useEffect, useState } from 'react';

import { Categories } from '../components/Categories/Categories';
import { Sort } from '../components/Sort/Sort';
import { PizzaBlockSkeleton } from '../components/PizzaBlock/PizzaBlockSkeleton';
import { PizzaBlock } from '../components/PizzaBlock/PizzaBlock';


export const HomePage = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isPizzasLoading, setIsPizzasLoading] = useState(true);

  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярності',
    sortProperty: 'rating',
  });

  useEffect(() => {
    setIsPizzasLoading(true);

    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    fetch(`https://62a89f79ec36bf40bdaa96f2.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}`)
      .then(res => res.json())
      .then((arr) => {
        setPizzas(arr);
        setIsPizzasLoading(false);
      })
    window.scrollTo(0, 0);
  }, [categoryId, sortType])

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
        {isPizzasLoading
          ? [... new Array(6)].map((_, index) => (
            <PizzaBlockSkeleton
              key={index}
            />
          ))
          : pizzas.map(pizza => (
            <PizzaBlock
              key={pizza.id}
              {...pizza}
            />
          ))}
      </div>
    </div>
  );
};
