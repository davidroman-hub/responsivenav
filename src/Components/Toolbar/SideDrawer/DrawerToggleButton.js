//import React, {Component} from 'react';
import React from 'react';
import './DrawerToggleButton.css';

const DrawerToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
     <div className="toggle-button_line" />
     <div className="toggle-button_line" />
     <div className="toggle-button_line" />
     </button>
);



// se le puso tres secciones a la hamburguesa por que son cada una de las diviciones
// class DrawerToggleButton extends Component {
//   render() {
//     return  (
//     <button className="toggle-button" onClick={this.props.click}>
//     <div className="toggle-button_line" />
//     <div className="toggle-button_line" />
//     <div className="toggle-button_line" />
//     </button>
//     )
//   }
// }
    


export default DrawerToggleButton;