import React, { Component } from 'react';
import '../style/acercade.css';
import Icon from '@material-ui/core/Icon';
import { Parallax } from "react-parallax";

class Acerca extends Component{
  constructor (props) {
  super(props)
  this.state = {
  }

}


  render(){

  return (
    <React.Fragment>
    <div id='cards-acerca-de'>
      <div id='grid-card'>
        <div id='card-izquierdo'>
        <Parallax bgImage={'https://images.pexels.com/photos/509922/pexels-photo-509922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} >
        </Parallax>
        </div>

        <div id='card-derecho'>

        </div>
        <h1 id='encabezado'>Nos inspiramos en tu pasión,</h1>
        <h1 id='encabezado2'>Para inspirar a tus clientes</h1>
      </div>
    </div>
  </React.Fragment>
  )};
}

export default Acerca;
