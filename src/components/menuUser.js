import React, { Component } from 'react';
import Burger from '../images/hamburger.svg';

class MenuUser extends Component{

    state = {
        users: []
    }

    async componentDidMount(){
        const usersRaw = await fetch("https://rickandmortyapi.com/api/character/")
        const info = await usersRaw.json()

        console.log(info)

        this.setState({
            users: info.results
        })

    }

    
    render(){




        const superUser = this.state.users.map( function (user, index){

            return (
<>

                <img
               
               className='imgUser'
               src={user.image}
               key={index}
               alt='Me in here'
               width='40px'
               height='40px'
                >
               
               </img>
                {/* <p
                className='saludo'>
                Hola
                </p>

                <p>
                   {user.name} 
                </p> */}

</>
       
       );
   }
       
       )
       



        return(
            <>
                 <a className='burger bRight'>
                    <img 
                    
                    src={ Burger } alt='hamburger'
                    width='30px'
                    height='30px'>
                    
                    </img>
                </a> 

                {/* {this.state.users.map( user =>
                <img
                
                className='imgUser'
                src={user.image}
                alt='Me in an image'
                width='30px'
                height='30px'
                >
                
                </img>
            )} */}

            <div>
                { superUser[3] }
            </div>
         


                

              

            </>
    )
    }
}

export default MenuUser;