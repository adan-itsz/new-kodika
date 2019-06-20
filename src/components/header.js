import React from 'react';
import '../style/header.css';
import Icon from '@material-ui/core/Icon';

function Header() {
  return (
    <div >
      <div style={{position:'relative'}}>

      <video id="videoBG" autoPlay muted loop>
          <source src="../imagenes/kodika.mp4" type="video/mp4"/>
      </video>
        <div id='menu'>
          <img src='../imagenes/insignia.png' style={{width:'50%',position:'relative',marginTop:'4vh',marginLeft:'auto',marginRight:'auto',display:'block'}}/>
          <Icon style={{width:'50%',fontSize:'40px',position:'relative',marginTop:'3vh',marginLeft:'auto',marginRight:'auto',display:'block'}}>dehaze</Icon>


        </div>
        <img src='../imagenes/logo1.png' id='logoPrincipal' style={{position:'relative'}}/>

      </div>
    </div>
  );
}

export default Header;
