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


componentDidMount(){
  var elementIzq = document.getElementsByClassName('boxIz');
  var elementDer = document.getElementsByClassName('boxDer');
  var elementEncabezado2 =document.getElementsByClassName('encabezado2');
  var elementEncabezado =document.getElementsByClassName('encabezado');

var elementHeight = elementIzq[0].clientHeight;

// listen for scroll event and call animate function
document.addEventListener('touchmove', animate);
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
  var elementPosition = elementIzq[0].getBoundingClientRect().top + scrollY + elementHeight;

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
       elementIzq[0].classList.remove('fadeIzq');
       elementDer[0].classList.remove('fadeDer');
      elementIzq[0].classList.add('bounce-Iz');
      elementDer[0].classList.add('bounce-Der');
      elementEncabezado2[0].classList.add('encabezado2');
      elementEncabezado2[0].classList.add('fadeEncabezado2');
      elementEncabezado[0].classList.add('encabezado');
      elementEncabezado[0].classList.add('fadeEncabezado');
  }

// else if(inView()==false) {
//   elementIzq[0].classList.remove('bounce-Iz');
//   elementDer[0].classList.remove('bounce-Der');
// }

}
}


  render(){

  return (
    <React.Fragment>
    <div id='cards-acerca-de'>
      <div id='grid-card'>
        <div className='boxIz fadeIzq'>
        <Parallax  bgImage={'https://images.pexels.com/photos/509922/pexels-photo-509922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} >
        </Parallax>
        </div>
        <div className='boxDer fadeDer' id='card-derecho'>
        </div>
        <h1 className='encabezado'>Nos inspiramos en tu pasión,</h1>
        <h1 className='encabezado2' >Para inspirar a tus clientes</h1>
      </div>
    </div>
  </React.Fragment>
  )};
}

export default Acerca;
