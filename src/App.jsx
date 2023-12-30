import React from 'react';
import './App.css';
import Header from './Components/Header';
import Slider from './Components/Slider';
import ProductionHouse from './Components/ProductionHouse';

const App = () => {
  return (
    <div>
       <Header/>
       <Slider/>
       <ProductionHouse/>
    </div>
  );
};

export default App;