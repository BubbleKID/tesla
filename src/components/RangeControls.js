import React, { Component } from 'react';

class RangeControls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            speedIndex : 0,
            tempIndex : 0,
            ac: "off"    
        };
    }

    changeSpeedIncrease() {
        if (this.state.speedIndex < 5 ){       
            this.setState({
                speedIndex: this.state.speedIndex+1
            })
        }       
    }  

    changeSpeedDecrease() {
        if (this.state.speedIndex > 0 ){       
            return this.setState({
                speedIndex: this.state.speedIndex-1
            })
        }       
    }   
    
    changeTempIncrease() {
        if (this.state.tempIndex < 5 ){       
            
            return this.setState({
                tempIndex: this.state.tempIndex+1
            })
        }      
    }  

    changeTempDecrease() {
        if (this.state.tempIndex > 0 ){       
            return this.setState({
                tempIndex: this.state.tempIndex-1
            })
        }          
    } 

    showSpeed(){
        var speedRange = [70,80,90,100,110,120];
        return speedRange[this.state.speedIndex];
    }

    showTemp(){
        var tempRange = [-10,0,10,20,30,40];
        return tempRange[this.state.tempIndex];
    }
    acSwitch(ev){
        ev.stopPropagation();

        if(this.state.ac==="off")
        {
            return this.setState({
                ac:"on"
            })
            
        }
        else{
            return this.setState({
                ac:"off"
            })
        }
    }

    showAC () {

    }
    

    render() {
      return (
            <div className="range-controls container">
            <div className="range-controls--speed">
                <h2 className="section-subtitle">Speed</h2>
                <div className="spinner-container">                    
                <p className="controls-data">
                    <span className="spinner-number">{this.showSpeed()}</span>
                    <span className="spinner-unit">KMH</span>
                </p>
                <p className="spinner-controls">
                    <button className="spinner-controls--increase" onClick={() => this.changeSpeedIncrease()}>Up</button>
                    <button className="spinner-controls--decrease" onClick={() => this.changeSpeedDecrease()}>Down</button>
                </p>
                </div>
            </div>
            <div className="range-controls--climate">
                <h2 className="section-subtitle">Ouside Temperature</h2>
                <div className="spinner-container">
                <p className="controls-data">
                    <span className="spinner-number">{this.showTemp()}</span>
                    <span className="spinner-unit">°</span>
                </p>
                <p className="spinner-controls">
                    <button className="spinner-controls--increase" onClick={() => this.changeTempIncrease()} >Up</button>
                    <button className="spinner-controls--decrease" onClick={() => this.changeTempDecrease()}>Down</button>
                </p>
                </div>
                <div className="climate-controller climate-off climate-heat" onClick={ev => this.acSwitch(ev)} >                     
                    <label >
                        <p className="controls-text">Heat OFF</p>
                        <i className="icon-airconditioning"></i>
                        <input type="radio" className="sr-only controls-data" ></input>
                    </label>                    
                </div>
            </div>          
            <div className="range-controls--wheels">
                <h2 className="section-subtitle">Wheels</h2>
                <div className="controls-wheelsize">
                    <label className="wheelsize-nineteen selected">
                    <input type="radio" className="sr-only controls-data" name="group1" value="19" checked=""></input>
                        19
                    </label>
                    <label className="wheelsize-twentyone">
                    <input type="radio" className="sr-only controls-data" name="group1" value="21"></input>
                        21
                    </label>
                </div>
            </div>
        </div>
      );
    }
    
}


export default  RangeControls;