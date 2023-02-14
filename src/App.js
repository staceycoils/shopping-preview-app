// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Item from './components/Item';
import ErrorPage from './components/ErrorPage';
import ItemRoll from './components/ItemRoll';
import Checkout from './components/Checkout';
import { BasketContext } from './contexts/BasketContext';
import { useState } from 'react';
import ScrollOnChange from './components/ScrollOnChange';

function App() {
  const [ basket, setBasket ] = useState([])

  return (
    <BrowserRouter>
      <BasketContext.Provider value={{ basket, setBasket }}>
        <div className="App">
          <ScrollOnChange />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ItemRoll />} />
            <Route path="/shop/:num" element={<Item />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/*" element={<ErrorPage errorType={404} />} />
          </Routes>
          <Footer />
        </div>
      </BasketContext.Provider>
    </BrowserRouter>
  );
}

export default App;
