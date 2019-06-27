import React, { Component } from 'react';
import Inicio from './inicio.js'
import Nosotros from './nosotros.js'
import {Router, Route, BrowserRouter, Switch, Link} from 'react-router-dom'



class RouterMain extends Component{
  constructor(){
    super()

  }

  render(){
    return(

      <div>


          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Inicio}/>
              <Route path="/work" component={Nosotros}/>
            </Switch>
          </BrowserRouter>



      </div>
    )
  }
}

export default RouterMain;
