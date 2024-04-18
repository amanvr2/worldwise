import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Navbar from './components/Navbar';
import AppLayout from './components/AppLayout';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import CityDetails from './components/CityDetails';
 
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="app" element={<AppLayout />} >
            <Route index element={<Navigate to="cities"/>} />
            <Route path="cities" element={<CityList/>} />
            <Route path="cities/:id" element={<CityDetails/>} />
            <Route path="countries" element={<CountryList/>} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
