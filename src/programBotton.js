import React, { Component } from 'react';
import Burger from '../images/hamburger.svg';
import mHeroOne from './mHeroOne';
import canvasDesigner from './canvasDesigner';
// import BtnHam from './btn-Ham';
import {Motion, spring} from 'react-motion';
import ReactDOM from 'react-dom';
import { get } from 'https';

// import {getCharacter}

class MenuModules extends Component{



    state = {
        users: [],
        heroes:[],
        images:[],

        dataRecent : [],
        dataAllTime : [],
        display: 'recent'
    }



   async componentDidMount(){

        // asi con javascript
        const response = await getEpisode()



    //axios

    // const response = await axios get(URL)
    // this.setState ({characters: respomse.data.results})



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
    




render(){


    return(

        <>

    <marquee>

        {this.state.date}
    
    </marquee>


    <div>

        { this.state.character.map((character, index) => 
        

            {
                return(
                    <div>
                        <p>
                            {character.name}
                        </p>

                        <button onClick={()=> this.setState({date: character.created})}> click </button>

                    </div>
                )
            }


        )}  

    </div>

        </>

    )



}

