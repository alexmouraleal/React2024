import React from 'react';
import ReactDOM from 'react-dom';
import Mensagem from './components/Mensagem.js';


ReactDOM.render(
  <div>
    <Mensagem estilo="danger" texto="erro"/>
    <Mensagem estilo="primary" texto="normal"/>
    <Mensagem estilo="success" texto="sucesso" />
    <Mensagem estilo="warning" texto="validacao" />
    <Mensagem estilo="info" texto="informacao" />
  </div>,
  document.getElementById('root')
);
