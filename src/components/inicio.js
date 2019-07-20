import React, { Component } from 'react';
import Header2 from './header.js';
import Nosotros from './nosotros.js';
import Abilities from './abilities.js';
import Acerca from './acerca.js';
import { Grid, Image,Icon,Header } from 'semantic-ui-react'
import Depth from './depthMap.js';
import '../style/Inicio.css';

class Inicio extends Component{
  constructor (props) {
  super(props)
  this.state = {
  }
}




  render(){
  return (
  <div>
    <div >

      <Header2/>
      <div style={{height:'165vh'}}>
        <Acerca/>
        <Abilities/>
      </div>
    </div>
  </div>
  )};
}

export default Inicio;
