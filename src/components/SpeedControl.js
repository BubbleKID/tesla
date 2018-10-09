
import React, { Component } from 'react';

class SpeedControl extends Component {
    constructor(props) {
        super(props);
        this.speedIndex = 0;  
        this.speedRange = [70,80,90,100,110,120];
        this.displaySpeed = this.speedRange[this.speedIndex];
    }

    changeSpeedIncrease() {     
        if (this.speedIndex < 5 ){   
            this.speedIndex = this.speedIndex + 1;  
            this.displaySpeed = this.speedRange[this.speedIndex];  
            this.props.setSpeed(this.displaySpeed);
            document.querySelector('.spinner-number').innerHTML= this.displaySpeed;                 
        }   
    }  

    changeSpeedDecrease() {
        if (this.speedIndex > 0 ){              
            this.speedIndex = this.speedIndex - 1;  
            this.displaySpeed = this.speedRange[this.speedIndex];  
            this.props.setSpeed(this.displaySpeed);
            document.querySelector('.spinner-number').innerHTML= this.displaySpeed;          
        }       
    }   

    render(){
        return(
            <div className="range-controls--speed">
                <h2 className="section-subtitle">Speed</h2>
                <div className="spinner-container">                    
                    <p className="controls-data">
                        <span className="spinner-number">{ this.displaySpeed }</span>
                        <span className="spinner-unit">KMH</span>
                    </p>
                    <p className="spinner-controls">
                        <button className="spinner-controls--increase" onClick={() => this.changeSpeedIncrease()}>Up</button>
                        <button className="spinner-controls--decrease" onClick={() => this.changeSpeedDecrease()}>Down</button>
                    </p>
                </div>
            </div>
        );
    }
}

export default  SpeedControl;