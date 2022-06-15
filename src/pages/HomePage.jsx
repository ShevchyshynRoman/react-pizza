import React, { useEffect, useState } from 'react';

import { Categories } from '../components/Categories/Categories';
import { Sort } from '../components/Sort/Sort';
import { PizzaBlockSkeleton } from '../components/PizzaBlock/PizzaBlockSkeleton';
import { PizzaBlock } from '../components/PizzaBlock/PizzaBlock';

import { getPizzas } from '../api/api';

export const HomePage = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isPizzasLoading, setIsPizzasLoading] = useState(true);

  useEffect(() => {
    setIsPizzasLoading(true);
    const searchPizzas = async () => {
      const result = await getPizzas();

      setPizzas(result);
      setIsPizzasLoading(false);
    }

    searchPizzas();
  }, [])

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
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
    </>
  );
};
