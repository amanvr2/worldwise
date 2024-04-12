import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Navbar from './components/Navbar';
import AppLayout from './components/AppLayout';
import CityList from './components/CityList';
 
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="app" element={<AppLayout />} >
            <Route path="cities" element={<CityList/>} />
            <Route path="countries" element={<p>countries</p>} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
