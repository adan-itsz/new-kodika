import React, { Component } from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Header from './header.js';
import Icon from '@material-ui/core/Icon';

const SectionWipes2Styled = styled.div`
  overflow: hidden;
  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #pinContainer .panel {
    height: 100vh;
    width: 100vw;
    position: absolute;
    text-align: center;
  }
  .panel span {
    position: relative;
    display: block;
    top: 50%;
    font-size: 80px;
  }

  .panel.blue {
    background-color: #FF6A5C;
  }

  .panel.turqoise {
    background-color: #F2D388;
  }

  .panel.green {
    background-color: #CCDFCB;
  }

  .panel.bordeaux {
    background-color: #776C10;
  }
`;




class Work extends Component{
  constructor(){
    super()
    this.state = {
      menuOpen: false
    }
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange () {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  handleItemClick () {
    this.setState({menuOpen: false})
  }

  render(){
    const menuVis = this.state.menuOpen ? 'menuActive' : 'menu';
    const displayImg = this.state.menuOpen ? 'imgMenuActive' : 'imgMenu';
    const MenuButton = this.state.menuOpen ? 'MenuButtonActive' : 'MenuButton';
    const ContentMenu = this.state.menuOpen ? 'ContentMenuActive' : 'ContentMenu';
    const displayDatos = this.state.menuOpen ? 'DatosActive' : 'Datos';
    return(

      <div>
        <div style={{width:'2vh'}}></div>
        <div onClick={this.handleStateChange} id={menuVis}>
          <img id={displayImg} src='../imagenes/insignia.png' />
          {this.state.menuOpen?
            <Icon onClick={this.handleStateChange} id={MenuButton}>add</Icon>

            :
            <Icon id='burger'onClick={this.handleStateChange} id={MenuButton}>dehaze</Icon>

          }
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
        </div>
        <SectionWipes2/>
      </div>
    )
  }
}


const SectionWipes2 = () => (
  <React.Fragment>
  <div>
  <SectionWipes2Styled>
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="300%"
        pin
      >
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          <section className="panel blue"><span>Panel azul</span></section>
          <Tween
            from={{ x: '-100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel turqoise"><img  style={{width:'60%'}}src='./imagenes/prototipo.svg'/></section>
          </Tween>
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel green"><span>Panel</span></section>
          </Tween>
          <Tween
            from={{ y: '-100%' }}
            to={{ y: '0%' }}
          >
            <section className="panel bordeaux"><span>Panel bou</span></section>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  </SectionWipes2Styled>
  </div>

  </React.Fragment>
);

export default Work;
