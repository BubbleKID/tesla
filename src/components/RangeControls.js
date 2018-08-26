import React, { Component } from 'react';


class RangeControls extends Component {

   
    constructor(props) {
        super(props);
        this.state = {
            speedIndex : 1,    
        };
    }

    showSpeed (index) {
        var speedRange = [70,80,90,100,110,120];
        console.log(speedRange[index]);
        return speedRange[index];
        
    }

   
    render() {

    

      return (
            <div className="range-controls container">
            <div className="range-controls--speed">
                <h2 className="section-subtitle">Speed</h2>
                <div className="spinner-container">                    
                <p className="controls-data">
                    <span className="spinner-number">{ 11 }</span>
                    <span className="spinner-unit">KMH</span>
                </p>
                <p className="spinner-controls">
                    <button className="spinner-controls--increase" onClick={this.showSpeed}>Up</button>
                    <button className="spinner-controls--decrease" onClick={this.showSpeed}>Down</button>
                </p>
                </div>
            </div>
            <div className="range-controls--climate">
                <h2 className="section-subtitle">Ouside Temperature</h2>
                <div className="spinner-container">
                <p className="controls-data">
                    <span className="spinner-number">20</span>
                    <span className="spinner-unit">°</span>
                </p>
                <p className="spinner-controls">
                    <button className="spinner-controls--increase" >Up</button>
                    <button className="spinner-controls--decrease" >Down</button>
                </p>
                </div>
                <div className="climate-controller climate-off climate-heat">                     
                <label>
                    <p className="controls-text">Heat OFF</p>
                    <i className="icon-airconditioning"></i>
                    <input type="radio" className="sr-only controls-data"></input>
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