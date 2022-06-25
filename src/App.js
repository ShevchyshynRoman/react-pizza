import React, { useState } from 'react';
import './App.css';
import './scss/app.scss';
import {
  Routes,
  Route
} from "react-router-dom";

import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const SearchContext = React.createContext();

function App() {
  const [searchInputQuery, setSearchInputQuery] = useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchInputQuery, setSearchInputQuery }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
