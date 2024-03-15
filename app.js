import React from 'react';
import ReactDOM from 'react-dom';
import Mensagem from './components/Mensagem.js';


ReactDOM.render(
    <div className="container">
      <div className="row align-items-end bg-dark bg-opacity-75">
        <div className="col">
          <span className="badge rounded-pill bg-info text-dark">Success</span>
        </div>
      </div>
      
      <div className="row align-items-end bg-dark bg-opacity-100">
        <div className="col">
          <Mensagem estilo="danger" texto="erro" />
        </div>
        <div className="col">
          <Mensagem estilo="primary" texto="normal" />
        </div>
        <div className="col">
          <Mensagem estilo="success" texto="sucesso" />
        </div>
      </div>
    </div>, document.getElementById('root')
);
