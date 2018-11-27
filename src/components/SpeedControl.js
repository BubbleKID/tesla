import React, { Component } from 'react';
let speedIndex = 0; 
const speedRange = [70,80,90,100,110,120];
class SpeedControl extends Component {
    onSpeedIncrease = () => {   
        if ( speedIndex < 5 ){   
            speedIndex = speedIndex + 1;  
            let speedValue = speedRange[speedIndex]; 
            this.props.setSpeed(speedValue); 
            document.querySelector('.spinner-number').innerHTML= speedValue;      
        }       
    }
    onSpeedDecrease = () =>{
        if ( speedIndex > 0 ){              
            speedIndex = speedIndex - 1;  
            let speedValue = speedRange[speedIndex];  
            this.props.setSpeed(speedValue); 
            document.querySelector('.spinner-number').innerHTML= speedValue;   
        }  
    }
    render(){ 
        return(
            <div className="range-controls--speed">
                <h2 className="section-subtitle">Speed</h2>
                <div className="spinner-container">                    
                    <p className="controls-data">
                        <span className="spinner-number">{ this.props.displaySpeed }</span>
                        <span className="spinner-unit">KMH</span>
                    </p>
                    <p className="spinner-controls">
                        <button className="spinner-controls--increase" onClick={ this.onSpeedIncrease }>Up</button>
                        <button className="spinner-controls--decrease" onClick={ this.onSpeedDecrease } >Down</button>
                    </p>
                </div>
            </div>
        );
    }
}

export default  SpeedControl;