import React, { Component } from 'react';
import '../style/Abilities.css';
import Icon from '@material-ui/core/Icon';
import { Grid,Header,Responsive,Segment } from 'semantic-ui-react'
import MediaQuery from 'react-responsive'



class Abilities extends Component{
  constructor (props) {
  super(props)
  this.state = {
  }

}

componentDidMount(){
  var elementFrente = document.getElementsByClassName('ImgFrente');
  var elementFondo = document.getElementsByClassName('ImgChica');
  var elementTexto = document.getElementsByClassName('contentText');


var elementHeight = elementFrente[0].clientHeight;

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);
document.addEventListener('touchmove', animate);


// check if element is in view
function inView() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;

  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = elementFondo[0].getBoundingClientRect().top + scrollY + elementHeight -80;

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
       elementTexto[0].classList.add('nosotros-textoSlide');
  }

}
}





  render(){

  return (
    <div style={{marginTop:'5%'}}>
     <Responsive minWidth={1201}>
      <Grid styles={{marginTop:'5%'}}>
        <Grid.Row>
          <Grid.Column width={7}>
          <div className='contentImg'>
            <img className='ImgFondo' src='/imagenes/recortes-web-fondo.png'/>
            <img className='ImgChica' src='/imagenes/recortes-web-frente.png'/>

            <div className='ImgFrente' style={{width:'130%'}}/>

          </div>
          </Grid.Column>
          <Grid.Column width={8} style={{ display: 'flex',alignItems: 'start'}}>
          <div className='contentText'>
            <h1 className='nosotros-texto'>-Nos gusta crear experiencias basadas en tus ideas, sabemos lo importante que son para ti y por eso la hacemos nuestras. En kódika somos un grupo de personas creativas en constante aprendizaje expertos en diferentes areas que pueden llevar a tu marca al siguiente nivel.-</h1>

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
     </Responsive>



     <Responsive  minWidth={220} maxWidth={849}>
      <React.Fragment  styles={{marginTop:'5%'}} >
        <React.Fragment >

          <div className='contentImg'>
            <img className='ImgFondo' src='/imagenes/recortes-web-fondo.png'/>
            <img className='ImgChica' src='/imagenes/recortes-web-frente.png'/>

            <div className='ImgFrente' style={{width:'130%'}}/>

          </div>

          </React.Fragment >

          <React.Fragment style={{ display: 'flex',alignItems: 'start'}}>

          <div className='contentText'>
            <h1 className='nosotros-texto'>-Nos gusta crear experiencias basadas en tus ideas, sabemos lo importante que son para ti y por eso la hacemos nuestras. En kódika somos un grupo de personas creativas en constante aprendizaje expertos en diferentes areas que pueden llevar a tu marca al siguiente nivel.-</h1>

            <div id='iconos'>
                <Header id='element' as='h4' style={{fontFamily:' Playfair Display,serif',padding:'0vh',color:'#776C10'}} icon>
                  -Software & mobile development- Design-
                </Header>
            </div>
          </div>
          <img className='circulo' src='/imagenes/circulo.png'/>

      </React.Fragment>
    </React.Fragment >
     </Responsive>
     <Responsive  minWidth={850} maxWidth={939}>
      <React.Fragment  styles={{marginTop:'5%'}} >
        <React.Fragment >

          <div className='contentImg'>
            <img className='ImgFondo' src='/imagenes/recortes-web-fondo.png'/>
            <img className='ImgChica' src='/imagenes/recortes-web-frente.png'/>

            <div className='ImgFrente' style={{width:'130%'}}/>

          </div>

          </React.Fragment >

          <React.Fragment style={{ display: 'flex',alignItems: 'start'}}>

          <div className='contentText'>
            <h1 className='nosotros-texto'>-Nos gusta crear experiencias basadas en tus ideas, sabemos lo importante que son para ti y por eso la hacemos nuestras. En kódika somos un grupo de personas creativas en constante aprendizaje expertos en diferentes areas que pueden llevar a tu marca al siguiente nivel.-</h1>

            <div id='iconos'>
                <Header id='element' as='h2' style={{fontFamily:' Playfair Display,serif',padding:'0vh',color:'#776C10'}} icon>
                  -Software & mobile development- Design-
                </Header>
            </div>
          </div>
          <img className='circulo' src='/imagenes/circulo.png'/>

      </React.Fragment>
    </React.Fragment >
     </Responsive>

     <Responsive  minWidth={940} maxWidth={1200}>
      <React.Fragment  styles={{marginTop:'5%'}} >

          <React.Fragment style={{ display: 'flex',alignItems: 'start'}}>

          <div className='contentText'>
            <h1 className='nosotros-texto'>-Nos gusta crear experiencias basadas en tus ideas, sabemos lo importante que son para ti y por eso la hacemos nuestras. En kódika somos un grupo de personas creativas en constante aprendizaje expertos en diferentes areas que pueden llevar a tu marca al siguiente nivel.-</h1>

            <div id='iconos'>
                <Header id='element' as='h2' style={{fontFamily:' Playfair Display,serif',padding:'0vh',color:'#776C10'}} icon>
                  -Software & mobile development- Design-
                </Header>
            </div>
          </div>
          <React.Fragment >

            <div className='contentImg'>
              <img className='ImgFondo' src='/imagenes/recortes-web-fondo.png'/>
              <img className='ImgChica' src='/imagenes/recortes-web-frente.png'/>

              <div className='ImgFrente' style={{width:'130%'}}/>

            </div>

            </React.Fragment >

      </React.Fragment>
    </React.Fragment >
     </Responsive>
    
  </div>
  )};
}




export default Abilities;
