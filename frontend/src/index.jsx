import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Home from './pages/Home';
import Destino from './pages/Destino';
import Promocoes from './pages/Promocoes';
import Contato from './pages/Contato';
import Cadastro from './pages/CadastroUsuario';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/Destino" element={<Destino />}></Route>
        <Route path="/Promocoes" element={<Promocoes />}></Route>
        <Route path="/Contato" element={<Contato />}></Route>
        <Route path="/Cadastro" element={<Cadastro />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


