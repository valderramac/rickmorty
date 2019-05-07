import React from 'react';
import Burger from '../images/hamburger.svg';





class BtnHam extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
      };
    
      handleMouseDown = () => {
        this.setState({open: !this.state.open});
      };

      handleTouchStart = (e) => {
        e.preventDefault();
        this.handleMouseDown();
      };


    render() {
      return (
        <div className="btn">
          
            <a         
            // href="#openModules"className='openModules'>
            
            // href={this.showAlert}
            onMouseDown={this.handleMouseDown}
            onTouchStart={this.handleTouchStart}
            onClick={this.showAlert}
            className='openModules'>

                <img
                className='burger bLeft'
                src={Burger}
                alt='hamburger'
                width='20px'
                height='20px'>
                </img>

                move the rupe

            </a>

       
  
        </div>
      );
    }
  }

export default BtnHam;