import React, {Component} from 'react';
import Toolbar from './Components/Toolbar/Toolbar'



class App extends Component{
  render(){
    return(
      <div className="App">
        <Toolbar></Toolbar>
        <main style={{marginTop:'64px'}}>
        <p> This is the page content</p>
        </main>
        
      </div>
    )
  }
}

export default App;