import React, {Component} from 'react';


class Mensagem extends Component {
  state = {
    count : 0 
  };
  
  render() {
    let estilo = this.props.estilo;
    let texto = this.props.texto
    let alertClass = 'alert alert-'.concat(estilo);
    let aditivo = 'style="width:100px;" ' ;
    return (
      <div>
         <div className={alertClass} role="alert" >
          <b>{texto}{aditivo}</b>
         </div>
     </div>
    );
  }
}

export default Mensagem;