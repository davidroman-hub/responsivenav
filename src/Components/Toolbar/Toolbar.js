import React from 'react';
import './Toolbar.css';
import  DrawerToggleButton from'./SideDrawer/DrawerToggleButton'


const Toolbar = props => (

  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_toggle-button">
         <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar_logo"><a href="/">The logo</a></div>
      <div className="spacer"/> 
      <div className="toolbar_navigation-item">
        <ul>
          <li><a href="/">Products</a></li>
          <li><a href="/">Userss</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar