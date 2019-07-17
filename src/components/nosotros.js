import React, { Component } from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Header from './header.js';
import Icon from '@material-ui/core/Icon';
import '../style/nosotros.css';

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

  .panel.one {
    background-color: #0000;
  }
  .panel.blue {
    background-color: #0388A6;
  }

  .panel.turqoise {

    background-color: #F2C36B;
  }

  .panel.green {
    background-color: #F2DCC2;
  }

  .panel.bordeaux {
    background-color: #04ADBF;
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

    return(

      <React.Fragment>
      <div style={{marginTop:'30%'}}>
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
            <section className="panel one"><img  style={{width:'60%'}}/>
              <p className="textEmpezar">¿Como empezar?</p>
            </section>
              <Tween
                from={{ y: '100%' }}
                to={{ y: '0%' }}
              >
                <section className="panel blue"><img  style={{width:'60%'}}src='./imagenes/entrevista.svg'/><p>Entrevista</p></section>
              </Tween>
              <Tween
                from={{ x: '-100%' }}
                to={{ x: '0%' }}
              >
                <section className="panel turqoise"><img  style={{width:'60%'}}src='./imagenes/prototipo.svg'/><p>Prototipo o Mockup</p></section>
              </Tween>
              <Tween
                from={{ x: '100%' }}
                to={{ x: '0%' }}
              >
              <section className="panel green"><img  style={{width:'60%'}}src='./imagenes/coding.svg'/><p>Codear</p></section>

              </Tween>
              <Tween
                from={{ y: '-100%' }}
                to={{ y: '0%' }}
              >
              <section className="panel bordeaux"><img  style={{width:'60%'}}src='./imagenes/exitoso.svg'/><p>entrega a produccion</p></section>
              </Tween>
            </Timeline>
          </Scene>
        </Controller>
      </SectionWipes2Styled>
      </div>

      </React.Fragment>
    )
  }
}


export default Work;
