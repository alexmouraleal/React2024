import React from 'react';
import ReactDOM from 'react-dom';
import Mensagem from './components/Mensagem.js';


ReactDOM.render(
  <div>
    <Mensagem estilo="danger" texto="texto1"/>
    <Mensagem estilo="primary" texto="texto2"/>
    <Mensagem estilo="success" texto="texto3" />
  </div>,
  document.getElementById('root')
);
