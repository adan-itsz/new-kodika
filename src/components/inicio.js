import React, { Component } from 'react';
import Header2 from './header.js';
import Nosotros from './nosotros.js';
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

componentDidMount(){
  var elementFrente = document.getElementsByClassName('ImgFrente');
  var elementFondo = document.getElementsByClassName('ImgFondo');

var elementHeight = elementFrente[0].clientHeight;

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

// check if element is in view
function inView() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;

  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = elementFrente[0].getBoundingClientRect().top + scrollY + elementHeight;

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }

  return false;
}

// animate element when it is in view
function animate() {
  // is element in view?
  console.log(inView());
  if (inView()) {
      // element is in view, add class to element
       elementFondo[0].classList.add('slideFondo');
       elementFrente[0].classList.add('slideFrente');
  }

}
}


  render(){
  return (
    <div >
      <Header2/>
      <div style={{height:'165vh'}}>
        <Acerca/>
        <Grid styles={{marginTop:'5%'}}>
          <Grid.Row>
            <Grid.Column width={7}>
            <div className='contentImg'>
              <img className='ImgFondo' src='/imagenes/foto1.png'/>
              <div className='ImgFrente' style={{width:'130%'}}/>

            </div>
            </Grid.Column>
            <Grid.Column width={8} style={{ display: 'flex',alignItems: 'start'}}>
            <div className='contentText'>
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
            </div>
            </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    </div>
  )};
}

export default Inicio;
