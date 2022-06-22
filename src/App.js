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
import { useState } from 'react';


function App() {
  const [searchInputQuery, setSearchInputQuery] = useState('');

  return (
    <div className="wrapper">
      <Header
        searchInputQuery={searchInputQuery}
        setSearchInputQuery={setSearchInputQuery}
      />
      <div className="content">
        <Routes>
          <Route path='/' element={<HomePage searchInputQuery={searchInputQuery} />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
