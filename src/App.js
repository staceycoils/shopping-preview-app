// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Item from './components/Item';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/:num" element={<Item />} />
        <Route path="/*" element={<ErrorPage errorType={404} />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
