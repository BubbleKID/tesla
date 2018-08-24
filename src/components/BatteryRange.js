import React, { Component } from 'react';
import model_70d from '../data/metric70Miles.json'

class BatteryRange extends Component {
    render() {

        var speed = 70;
        var temp = -10;
        var wheel = 19;
        var ac = "on";
        // var lights = "off";
        // var windows = "up";
        // var city = 331;

        console.log(model_70d);
        console.log(model_70d.filter(status=>status.temp ==-10));
      return (

        <div className="batterytype-ranges">
            <div className="battery-option battery-option--75D" >
                <span>
                    <h1 className="battery-badge--75d">75D</h1>
                </span>                        
                <span className="battery-range-content">458</span>
                <span className="battery-range-units" >KM</span>
            </div>
            <div className="battery-option battery-option--90D">
                <span>
                    <h1 className="battery-badge--100d">100D</h1> 
                </span>
                <span className="battery-range-content">582</span>
                <span className="battery-range-units">KM</span>
            </div>
            <div className="battery-option battery-option--100D">
                <span >
                    <h1 className="battery-badge--p100d">P100D</h1>
                </span>
                <span className="battery-range-content">547</span>
                <span className="battery-range-units">KM</span>
            </div> 
        </div>    
      );
    }
}


export default BatteryRange;