import React, { Component } from 'react';
import Header2 from './header.js';
import Nosotros from './nosotros.js';
import Acerca from './acerca.js';
import { Grid, Image,Icon,Header } from 'semantic-ui-react'
import Depth from './depthMap.js';
class Inicio extends Component{
  constructor (props) {
  super(props)
  this.state = {
  }
}

  componentDidMount(){

    }


  render(){
  return (
    <div >
      <Header2/>
      <div style={{height:'200vh'}}>
        <Acerca/>
        <Grid>
          <Grid.Row>
            <Grid.Column width={7}>
              <img  style={{width:'90%'}}src='https://images.pexels.com/photos/2378544/pexels-photo-2378544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
            </Grid.Column>
            <Grid.Column width={8} style={{ display: 'flex',alignItems: 'start'}}>

            <h1 id='nosotros-texto'>-Nos gusta crear experiencias basadas en tus ideas, sabemos lo importante que son para ti y por eso la hacemos nuestras. En kódika somos un grupo de personas creativas en constante aprendizaje expertos en diferentes areas que pueden llevar a tu marca al siguiente nivel.-</h1>

            <div id='iconos'>
                <Header id='element' as='h3' style={{fontFamily:' Playfair Display,serif',padding:'3vh',color:'#776C10'}} icon>
                  -Software development-
                </Header>
                <Header as='h3' style={{fontFamily:' Playfair Display,serif',padding:'3vh',color:'#776C10'}} icon>
                  -Mobile development-
                </Header>
                <Header as='h3' style={{fontFamily:' Playfair Display,serif',padding:'3vh',color:'#776C10'}} icon>
                  -Design-
                </Header>
              </div>

            </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    </div>
  )};
}

export default Inicio;
