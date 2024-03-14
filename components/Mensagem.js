import React, {Component} from 'react';


class Mensagem extends Component {
  state = {
    count : 0
  };

  render() {
    let estilo = this.props.estilo;
    let texto = this.props.texto
    let alertClass = 'alert alert-'.concat(estilo);
    
    return (
      <div>
         <div className={alertClass} role="alert">
          <b>{texto}</b>
         </div>
     </div>
    );
  }
}

export default Mensagem;