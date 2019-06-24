import React, { Component } from 'react';
import '../style/header.css';
import Icon from '@material-ui/core/Icon';

var canvas;
var ctx;
var raf;
var rect1, rect2;

var running;
var distance = 80;
var mouseX = 0,
    mouseY = 0,
    mouseLastX = 0,
    mouseLastY = 0,
    mouseDirectionX = 0,
    mouseDirectionY = 0,
    mouseSpeedX = 0,
    mouseSpeedY = 0;
class Nosotros extends Component{
  constructor (props) {
  super(props)
  }

  componentWillMount(){

  }
  componentDidMount(){
      this.initCanvas();
    console.log('componentdidmount');

    document.addEventListener('mousemove', this.oldMouseMove.bind(this));
    window.addEventListener('resize', this.onResize.bind(this));
    this.mouseSpeed();

  }

   mouseSpeed() {
     console.log('mousespeed');
    mouseSpeedX = mouseX - mouseLastX;
    mouseSpeedY = mouseY - mouseLastY;
    mouseLastX = mouseX;
    mouseLastY = mouseY;
    setTimeout(this.mouseSpeed, 50);
}

  request(){}
  initCanvas(){
    console.log('init canvas');

    canvas = document.querySelector("canvas");
      ctx = canvas.getContext('2d');

      cancelAnimationFrame(raf);

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      rect1 = {
        x: 0,
        y: 0,
        w: window.innerWidth/2,
        h: window.innerHeight
      };
      rect2 = {
        x: window.innerWidth/2,
        y: 0,
        w: window.innerWidth/2,
        h: window.innerHeight
      };


      this.draw();
  }


   mouseDirection(e) {
     console.log('mouse direction');
    if (mouseX < e.pageX) {
        mouseDirectionX = 1;
    } else if (mouseX > e.pageX) {
        mouseDirectionX = -1;
    } else {
        mouseDirectionX = 0;
    }
    if (mouseY < e.pageY) {
        mouseDirectionY = 1;
    } else if (mouseY > e.pageY) {
        mouseDirectionY = -1;
    } else {
        mouseDirectionY = 0;
    }
    mouseX = e.pageX;
    mouseY = e.pageY;
    // console.log(`DirX: ${mouseDirectionX} DirY: ${mouseDirectionY}`);
}

   onResize() {
    this.initCanvas();
  }

 draw() {
   console.log('draw');

    this.clear();

    ctx.fillStyle = '#DAF7DC';
    ctx.fillRect(rect2.x, rect2.y, rect2.w, rect2.h);

    ctx.fillStyle = '#9EE493';
    ctx.fillRect(rect1.x, rect1.y, rect1.w, rect1.h);
    if (running) {
        // console.log("Running!")
        ctx.beginPath();
        if (mouseX < window.innerWidth/2) {
            ctx.fillStyle = '#DAF7DC';
        } else {
            ctx.fillStyle = '#9EE493';
        }
        ctx.moveTo(rect1.x + rect1.w, rect1.y);
        ctx.quadraticCurveTo(mouseX, mouseY, rect1.x + rect1.w, rect1.y + rect1.h);
        ctx.fill();
    }
  raf = window.requestAnimationFrame(this.request.bind(this));
}


   clear() {
     console.log('clear');
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

   oldMouseMove(e) {
     console.log('old mouse move');

     this.mouseDirection(e);
    mouseX = e.clientX;
    mouseY = e.clientY;
    var distX1 = e.clientX - (rect1.x + rect1.w);
    var distY1 = e.clientY - (rect1.y + rect1.h);
    if ((mouseDirectionX > 0 && mouseX > rect2.x) || (mouseDirectionX < 0 && mouseX < rect2.x)) {
        if (distX1 > -distance && distX1 < distance) {
            raf = window.requestAnimationFrame(this.draw.bind(this));
            running = true;
        } else {
            cancelAnimationFrame(raf);
            running = false;
        }
    }
  }

  render(){
  return (
    <div  style={{position:'relative'}}>
      <canvas ref="canvas"/>

    </div>
  )};
}

export default Nosotros;
