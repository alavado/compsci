import React from 'react';
import './App.css'
import Landing from '../Landing';
import { BrowserRouter, Route } from 'react-router-dom'
import Cotizador from '../Cotizador';
import Ceres from '../Ceres';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/cotizador" exact component={Cotizador} />
      <Route path="/ceres" exact component={Ceres} />
    </BrowserRouter>
  );
};

export default App;
