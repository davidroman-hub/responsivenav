import React from 'react';
import './Toolbar.css';
import drawerToggleButton from './SideDrawer/DrawerToggleButton'



const Toolbar = () => (

  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
         <drawerToggleButton></drawerToggleButton>
      </div>
      <div className="toolbar_logo"><a href="/">The logo</a></div>
      <div className="spacer"/> 
      <div className="toolbar_navigation-item">
        <ul>
          <li><a href="/">Products</a></li>
          <li><a href="/">Users</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar