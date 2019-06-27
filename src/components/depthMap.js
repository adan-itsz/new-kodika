import React, { Component } from 'react';
import '../style/header.css';
import Icon from '@material-ui/core/Icon';
import * as PIXI from 'pixi.js';

class Depth extends Component{
  constructor (props) {
  super(props)
}

  componentDidMount(){
    var EffectElement = document.getElementById("imagenEffect");
    console.log(EffectElement);
      let app = new PIXI.Application({width: 500, height:700});
        EffectElement.appendChild(app.view);
        let img = new PIXI.Sprite.from('../imagenes/foto1.jpg' );
        img.width = 500;
        img.height = 750;
        app.stage.addChild(img);
        let depthMap = new PIXI.Sprite.from('../imagenes/segunda.jpg' );
        app.stage.addChild(depthMap);

        let displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
        app.stage.filters = [displacementFilter];

        window.onmousemove = function(e) {
          displacementFilter.scale.x = (100 / 2 - e.clientX) /15;
          displacementFilter.scale.y = (100 / 2 - e.clientY) /15;
        };


  }


  render(){
  return (
    <div >
      <div id="imagenEffect">
      </div>
    </div>
  )};
}

export default Depth;
