import React, { Component } from 'react';
import Burger from '../images/hamburger.svg';
import mHeroOne from './mHeroOne';
import canvasDesigner from './canvasDesigner';
// import BtnHam from './btn-Ham';
import {Motion, spring} from 'react-motion';
import ReactDOM from 'react-dom';

class MenuModules extends Component{



    state = {
        users: [],
        heroes:[],
        images:[],
        names: [],

        dataRecent : [],
        dataAllTime : [],
        display: 'recent'
    }

    async componentDidMount(){

//firstMOdules
        const usersRaw = await fetch("https://rickandmortyapi.com/api/character/?name=rick&status=dead")
        const info = await usersRaw.json()

//secondMoules
        const heroesRaw = await fetch("https://rickandmortyapi.com/api/character/?name=Morty&status=alive")
        const infoHeroes = await heroesRaw.json()

//thirdMoules
        const imagesRaw = await fetch("https://rickandmortyapi.com/api/character/?name=Summer")
        const infoImages = await imagesRaw.json()        



        console.log(info)

        this.setState({
            users: info.results,
            heroes: infoHeroes.results,
            images: infoImages.results,
            open: false,
            callComponent: true
        })


        // this.showAlert(){
        //     alert("iamanalert")
        // }


    }

    constructor(props) {
        super(props);
        // this.state = {open: false};
      };
    
      handleMouseDown = () => {
        this.setState({open: !this.state.open});
      };

      handleMouseClick = () => {
        this.setState({callComponent: !this.state.callComponent});
      };

      handleTouchStart = (e) => {
        e.preventDefault();
        this.handleMouseDown();
      };

      handleTouchStartS = (t) => {
        t.preventDefault();
        this.handleMouseClick();
      };

    

    render(){
        return(
            <>  
                {/* <BtnHam></BtnHam> */}
                <a
                
                // href="#openModules"className='openModules'>
                
                // href={this.showAlert}
                onMouseDown={this.handleMouseDown}
                onTouchStart={this.handleTouchStart}
                // onClick={this.showAlert}
                className='btnOpenModules'>
                <img
                className='burger bLeft'
                src={Burger}
                alt='hamburger'
                width='30px'
                height='30px'>
                </img>
                </a>

                {/* <Motion style={{x: spring(this.state.open ? 400 : 0)}}>
          {({x}) =>
            // children is a callback which should accept the current value of
            // `style`
            <div className="demo0">
              <div className="demo0-block" style={{
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
              }} />
            </div>
          }
        </Motion> */}


        <Motion
            defaultStyle={{x:200, opacity:1, width:275, xSecond:-200}}
            style={{
                x: spring(this.state.open ? -600 : 0),
                opacity: spring(this.state.open ? 0 : 1),
                width: spring(this.state.open ? 20 : 275),
                xSecond: spring(this.state.callComponent ? -290 : 0),
                display: spring(this.state.callComponent ? 'none' : 'inherit')
                }}
        >

          {style =>(
          
                <div
                    style={{
                        WebkitTransform: `translate3d(${style.x}px, 0, 0)`,
                        transform: `translate3d( ${style.x}px, 0, 0)`,
                        // opacity: style.opacity,
                        width: style.width
                        // display: "none"
                    }}
                    className="modulesContent"
                >

                <p>Modulos</p>
                
                <div className="modulesContainer">
                    <p>Modules Headers</p>

                    {this.state.users.map( (user, i) =>
                        
                    <div key= {i}>

                        <button                         
                        onTouchStart={this.handleTouchStartS}
                        onMouseDown={this.handleMouseClick}  
                        onClick={()=> this.setState({names: user.name})}                        
                        >
                        <img                      
                        className='iconsModules'
                        src={user.image}
                        alt='previsualize'
                        width='80px'
                        height='80px'
                        >
                        </img>

                       <p style={{
                          WebkitTransform: `translate3d(${style.xSecond}px, 0, 0)`,
                          transform: `translate3d( ${style.xSecond}px, 0, 0)`,
                          width: `150px`
                          }}>

                            {this.state.names}
                      
                      </p>

                        
                        </button>
                    </div>

                       
                        
                    )} 
                </div>

                <div className="modulesContainer">
                <p>Modules Hero</p>

                {this.state.heroes.map( hero =>
                    <img
                                
                    className='iconsModules'
                    src={hero.image}
                    alt='previsualize'
                    width='80px'
                    height='80px'
                    >
                    
                    </img>
                    
                )} 

                </div>

                <div className="modulesContainer">
                <p>Modules Images</p>

                {this.state.images.map( image =>
                    <img
                                
                    className='iconsMoules'
                    src={image.image}
                    alt='previsualize'
                    width='80px'
                    height='80px'
                    >
                    
                    </img>
                    
                )} 

                </div>


                </div>
            )}
          </Motion>

            </>

    )
    }
}

export default MenuModules;