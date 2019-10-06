import React, {Component} from 'react';
import Toolbar from './Components/Toolbar/Toolbar'
import Backdrop from './Components/Backdrop/backdrop'
import SideDrawer from './Components/Toolbar/SideDrawer/SideDrawer'

// esto especifica que esta cerrado 
class App extends Component{ 
   state = { 
     sideDrawerOpen: false
   }
//la funcion 
  drawerToggleClickHandler = () => { this.setState((prevState) => {return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
   };
   
   backdropClickhandler = () => {
      this.setState({SideDrawerOpen:false})
   };

  render(){
  
    let backdrop;
    
    if (this.state.sideDrawerOpen){ 
      backdrop= <Backdrop click={this.drawerToggleClickHandler}/>
    }


return(
  <div style={{height:'100%'}} className="App">
    <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
    <SideDrawer show={this.state.sideDrawerOpen}/>
    {backdrop}
    <main style={{marginTop:'64px'}}>
    <p> This is the page content</p>
    </main>
    
  </div>
      )
    }
  }
  
  


export default App;
