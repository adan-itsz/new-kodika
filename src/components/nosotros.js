import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './header.js';
import '../style/nosotros.css';
import {SectionsContainer, Section} from 'react-fullpage';
import Icon from '@material-ui/core/Icon';
import {Responsive,Segment } from 'semantic-ui-react'





class Work extends Component{
  constructor(){
    super()

  }



  render(){
    let options = {
      sectionClassName:     'section',
      anchors:              ['Analisis', 'Prototipado', 'Desarrollo','Testing','Produccion','Integracion'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        false,
      sectionPaddingTop:    '0',
      sectionPaddingBottom: '0',
      arrowNavigation:      true
    };
    return(
      <React.Fragment >
      <Barra/>
      <SectionsContainer className="containerSection" {...options}>
          <Section className="custom-section"  verticalAlign="true" color="#69D2E7"
             id='analisis' >
            <div className='imagenesCirculo'>
                <img src='./imagenes/work/analisis.svg' id='analisis-img' style={{width:'100%',marginTop:'15vh'}}/>
                  <h1 className='encabezados'>Analisis</h1>
                  <h2 className='descripciones'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                   doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae</h2>
            </div>


          </Section>

          <Section className="custom-section"  verticalAlign="true" color="#69D2E7"
             id='prototipado' >
            <div className='imagenesCirculo'>
              <img src='./imagenes/circulo-1.svg' style={{width:'100%'}}/>
              <img src='./imagenes/work/prototipado.svg' className='imagenes-bajar'/>
              <h1 className='encabezados'>Prototipado</h1>
              <h2 className='descripciones'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
               doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae</h2>
            </div>

          </Section>

          <Section className="custom-section"  verticalAlign="true" color="#69D2E7"
             id='desarrollo' >
            <div className='imagenesCirculo'>
              <img src='./imagenes/work/desarrollo.svg'/>
              <h1 className='encabezados' style={{backgroundColor:'rgba(234, 97, 0, 0.8)',color:'#ffffff'}}>Desarrollo</h1>
              <h2 className='descripciones'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
               doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae</h2>
            </div>
          </Section>

          <Section className="custom-section"  verticalAlign="true" color="#69D2E7"
             id='testing' >
            <div className='imagenesCirculo'>
              <img src='./imagenes/circulo-1.svg' style={{width:'100%'}}/>
              <img src='./imagenes/work/testing.svg'/>
              <h1 className='encabezados'>Testing</h1>
              <h2 className='descripciones'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
               doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae</h2>
            </div>
          </Section>

          <Section className="custom-section"  verticalAlign="true" color="#69D2E7"
             id='deploy' >
            <div className='imagenesCirculo'>
              <img src='./imagenes/circulo-1.svg' style={{width:'100%'}}/>
              <img src='./imagenes/work/deploy.svg' />
              <h1 className='encabezados' style={{backgroundColor:'rgb(255, 79, 59,.8)',color:'#ffffff'}}>Puesta en producción</h1>
              <h2 className='descripciones' style={{color:'#ffffff'}}>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
               doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae</h2>
            </div>
          </Section>

          <Section className="custom-section"  verticalAlign="true" color="#69D2E7"
             id='integracion' >
            <div className='imagenesCirculo'>
              <img src='./imagenes/circulo-1.svg' style={{width:'100%',}}/>
              <img src='./imagenes/work/integracion.svg' className='imagenes-bajar'/>
              <h1 className='encabezados'  style={{backgroundColor:'rgb(255, 66, 126,.8)',color:'#ffffff'}}>Integración continua</h1>
              <h2 className='descripciones'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
               doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae</h2>
            </div>
          </Section>
        </SectionsContainer>

      </React.Fragment>
    )
  }
}





class Barra extends Component{
  constructor (props) {
  super(props)
  this.state = {
    menuOpen: false
  }
  this.handleStateChange = this.handleStateChange.bind(this);

}
handleStateChange () {
  var elementMenu = document.getElementById('menuAnimation');

  if (!this.state.menuOpen) {
    elementMenu.classList.remove('menuStatic');
    elementMenu.classList.remove('menu');
    elementMenu.classList.add('menuActive');
  }else {

    elementMenu.classList.remove('menuStatic');
    elementMenu.classList.remove('menuActive');
    elementMenu.classList.add('menu');
  }

  this.setState({menuOpen: !this.state.menuOpen})
}

handleItemClick () {
  this.setState({menuOpen: false})
}


  render(){
    const displayImg = this.state.menuOpen ? 'imgMenuActive' : 'imgMenu';
    const MenuButton = this.state.menuOpen ? 'MenuButtonActive' : 'MenuButton';
    const ContentMenu = this.state.menuOpen ? 'ContentMenuActive' : 'ContentMenu';
    const displayDatos = this.state.menuOpen ? 'DatosActive' : 'Datos';
  return (
    <div onClick={this.handleStateChange} id="menuAnimation" className='menuStatic'>
      <img id={displayImg} src='../imagenes/insignia.png' />
      {this.state.menuOpen?
        <Icon onClick={this.handleStateChange} id={MenuButton}>add</Icon>

        :
        <Icon id='burger'onClick={this.handleStateChange} id={MenuButton}>dehaze</Icon>

      }
    <Responsive  minWidth={1000}>
      <div id={ContentMenu}>
      <a onClick={() => this.handleItemClick()} id="home"  className="menu-item" href="/">Home</a>
      <a onClick={() => this.handleItemClick()} id="about" className="menu-item" href="#"> Nosotros</a>
      <a onClick={() => this.handleItemClick()} id="contact" className="menu-item" href="/work">Nuestro trabajo</a>

      </div>
      <div id={displayDatos}>
          <div className="box Ubicacion">
            <h5 style={{fontSize:'2vh',color:'#776C10',fontWeight:'100'}}>Ubicación</h5>
          <p>Zapopan, Jalisco, MX</p>
          </div>
          <div className="box Cotizaciones">
            <h5 style={{fontSize:'2vh',color:'#776C10',fontWeight:'100'}} >Contrátanos</h5>
            <p>contact@kodika.mx</p>
          </div>
          <div className="box Redes" >
            <h5 style={{fontSize:'2vh',color:'#776C10',fontWeight:'100'}}>Redes Sociales</h5>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>Github</p>
            <p>Linkedin</p>
          </div>
          <div className="box Equipo">
            <h5 style={{fontSize:'2vh',color:'#776C10',fontWeight:'100'}}>Forma parte de nuestro equipo</h5>
            <p>hiring@kodika.mx </p>
          </div>
      </div>
    </Responsive>

    <Responsive  minWidth={820} maxWidth={999}>
    <div id={ContentMenu}>
    <a onClick={() => this.handleItemClick()} id="home"  className="menu-item" href="/">Home</a>
    <a onClick={() => this.handleItemClick()} id="about" className="menu-item" href="#"> Nosotros</a>
    <a onClick={() => this.handleItemClick()} id="contact" className="menu-item" href="/work">Nuestro trabajo</a>

    </div>
    <div id={displayDatos}>

      <div className="box Ubicacion">
        <h5 style={{fontSize:'2vh',color:'#776C10',fontWeight:'100'}}>Ubicación</h5>
      <p>Zapopan, Jalisco, MX</p>
      </div>
      <div className="box Cotizaciones">
        <h5 style={{fontSize:'2vh',color:'#776C10',fontWeight:'100'}} >Contrátanos</h5>
        <p>contact@kodika.mx</p>
      </div>
      <div className="box Redes" >
        <h5 style={{fontSize:'2vh',color:'#776C10',fontWeight:'100'}}>Redes Sociales</h5>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
        <p>Github</p>
        <p>Linkedin</p>
      </div>
      <div className="box Equipo">
        <h5 style={{fontSize:'2vh',color:'#776C10',fontWeight:'100'}}>Forma parte de nuestro equipo</h5>
        <p>hiring@kodika.mx </p>
      </div>
    </div>
    </Responsive>

    <Responsive  minWidth={290} maxWidth={819}>
    <div id={ContentMenu}>
    <a onClick={() => this.handleItemClick()} id="home"  className="menu-item" href="/">Home</a>
    <a onClick={() => this.handleItemClick()} id="about" className="menu-item" href="#"> Nosotros</a>
    <a onClick={() => this.handleItemClick()} id="contact" className="menu-item" href="#">Nuestro trabajo</a>
    </div>
    <div id={displayDatos}>

      <div className="box Ubicacion">
        <h5 style={{fontSize:'2vh',color:'#776C10',fontWeight:'100'}}>Ubicación</h5>
      <p>Zapopan, Jalisco, MX</p>
      </div>
      <div className="box Cotizaciones">
        <h5 style={{fontSize:'2vh',color:'#776C10',fontWeight:'100'}} >Contrátanos</h5>
        <p>contact@kodika.mx</p>
      </div>
      <div className="box Redes" >
        <h5 style={{fontSize:'2vh',color:'#776C10',fontWeight:'100'}}>Redes Sociales</h5>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
        <p>Github</p>
        <p>Linkedin</p>
      </div>
      <div className="box Equipo">
        <h5 style={{fontSize:'2vh',color:'#776C10',fontWeight:'100',width:'100%'}}>Forma parte de nuestro equipo</h5>
        <p>hiring@kodika.mx </p>
      </div>
    </div>
    </Responsive>
    </div>
  )};
}

export default Work;
