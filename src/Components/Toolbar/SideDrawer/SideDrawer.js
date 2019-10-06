import React from 'react';
import './SideDrawer.css';

const SideDrawer = props => {
 let drawerClasses = ['side-drawer'];
 if (props.show){
        drawerClasses = ['side-drawer','open'];
 }
 return(
 <nav className={drawerClasses.join(' ')}>
        <ul>
            <li>
            </li>
              <a href="/">Products</a>
              <li>
              <a href="/">Users</a>
            </li>
        </ul>
      </nav>
 );
};






// class SideDrawer extends Component {
//   render(){
//     return  <nav className="side-drawer">
//        <ul>
//          <li>
//          </li>
//          <a href="/">Products</a>
//          <li>
//          <a href="/">Users</a>
//          </li>
//        </ul>
//      </nav>
    
//   }
// } 

/* tuve que ponerlo en app js por que es independiente*/

export default SideDrawer