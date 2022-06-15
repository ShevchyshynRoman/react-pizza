import './App.css';
import './scss/app.scss';
import {
  Routes,
  Route
} from "react-router-dom";

import {Header} from "./components/Header/Header";
import {HomePage} from "./pages/HomePage";
import {CartPage} from "./pages/CartPage";
import {NotFoundPage} from "./pages/NotFoundPage";


function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
