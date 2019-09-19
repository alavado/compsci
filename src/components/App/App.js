import React from 'react';
import './App.css'
import Landing from '../Landing';
import { BrowserRouter, Route } from 'react-router-dom'
import Cotizador from '../Cotizador';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/cotizador" exact component={Cotizador} />
    </BrowserRouter>
  );
};

export default App;
