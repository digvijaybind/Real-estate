import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListingTopSearch from './components/ListingTopSearch';
import ListingPage from './components/ListingPage';
import Listing from './components/Listing';
import DetailPage from './components/DetailPage';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

    <Header />
    <Routes>
    
      <Route path='/' element={<ListingPage/>  } />
      <Route path='detail-page' element={<DetailPage/>  } />
   
   </Routes>
    <Footer/>
 
    </div>
  );
}

export default App;
