import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MenuUser from './components/menuUser';
import MenuModules from './components/menuModules';
import CanvasDesigner from './components/canvasDesigner';
class App extends Component {
  render() {
    return (
      <div className="mailApp">
        
        <div className='menuUser'>
        <MenuUser />
        </div>
        
        <div className='canvasDesigner'>
        <CanvasDesigner />
        </div>

        <div id='openModules' className= 'menuModules'>
        <MenuModules />
        </div>


      </div>
    );
  }
}

export default App;
