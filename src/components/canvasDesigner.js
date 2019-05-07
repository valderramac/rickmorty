import React, { Component } from 'react';

class CanvasDesigner extends Component{
    render(){
        return(
            <>
                <p className="projectName">project name</p>
                <div  id= 'canvasD' className='theCanvas' ></div>
            </>
    )
    }
}

export default CanvasDesigner;