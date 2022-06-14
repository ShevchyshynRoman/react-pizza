import './App.css';
import './scss/app.scss';
import { Header } from './components/Header/Header';
import { Categories } from './components/Categories/Categories';
import { Sort } from './components/Sort/Sort';
import { PizzaBlock } from './components/PizzaBlock/PizzaBlock';

import pizzas from './assets/pizzas.json'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Всі піцци</h2>
          <div className="content__items">
            {
              pizzas.map(pizza => (
              <PizzaBlock
                key={pizza.id}
                imageUrl={pizza.imageUrl}
                title={pizza.title}
                types={pizza.types}
                sizes={pizza.sizes}
                price={pizza.price}
              />
            ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
