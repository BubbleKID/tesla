import React, { Component } from 'react';
import model_75d from '../data/metric75DMiles.json';
import model_100d from '../data/metric100DMiles.json';
import model_p100d from '../data/metricP100DMiles.json';


class BatteryRange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            speedIndex : 1,
            tempIndex : 2,
            wheelIndex : 1,
            ac :"on",
            model : "model_75d"            
        };
    }

    getStatus = (mph,temp,ac,wheels,model) => {
            
        var range;
        var currentStatus = model.filter(status=>status.temp === -10)
        .filter(status=>status.wheelsize === 19)
        .filter(status=>status.ac === "off")
        .filter(status=>status.windows === "up")
        .filter(status=>status.lights === "off");
        currentStatus.filter(
            status=>status.hwy.filter(
                function(status){
                    if(status.mph === 70)
                    {              
                        range =  status.miles;
                       
                    }
                    return range;
                }
        ));
        return range;
    }

   
    render() {

       var  range_75d = this.getStatus(70,10,"off",19,model_75d);
       var  range_100d = this.getStatus(70,10,"off",19,model_100d);
       var  range_p100d = this.getStatus(70,10,"off",19,model_p100d);

        // var speedRange = [70,80,90,100,110,120];
        // var tempRange = [-10,0,10,20,30,40];
        // var wheelRange = [19,21];
        // var speedIndex = 1;
        // var tempIndex = 2;
        // var wheelIndex = 1;
        // var ac = "on";
        // var lights = "off";
        // var windows = "up";
        // var city = 331;
        //console.log(model_70d);
        //console.log( );
      return (
        <div className="batterytype-ranges">
            <div className="battery-option battery-option--75D" >
                <span>
                    <h1 className="battery-badge--75d">75D</h1>
                </span>                        
                <span className="battery-range-content">{range_75d  }</span>
                <span className="battery-range-units" >KM</span>
            </div>
            <div className="battery-option battery-option--90D">
                <span>
                    <h1 className="battery-badge--100d">100D</h1> 
                </span>
                <span className="battery-range-content">{ range_100d }</span>
                <span className="battery-range-units">KM</span>
            </div>
            <div className="battery-option battery-option--100D">
                <span >
                    <h1 className="battery-badge--p100d">P100D</h1>
                </span>
                <span className="battery-range-content">{ range_p100d }</span>
                <span className="battery-range-units">KM</span>
            </div> 
        </div>    
      );
    }
}


export default BatteryRange;