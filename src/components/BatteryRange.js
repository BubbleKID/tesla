import React, { Component } from 'react';
import model_75d from '../data/metric75DMiles.json';
import model_100d from '../data/metric100DMiles.json';
import model_p100d from '../data/metricP100DMiles.json';


class BatteryRange extends Component {
    constructor(props) {
        super(props);   
        //this.displayWheelSize = 19;
    }

    getStatus = (mph,temp,ac,wheels,model) => {     
        var range;
        var currentStatus = model.filter(status=>status.temp === temp)
        .filter(status=>status.wheelsize === wheels)
        .filter(status=>status.ac === ac)
        .filter(status=>status.windows === "up")
        .filter(status=>status.lights === "off");
        currentStatus.filter(
            status=>status.hwy.filter(
                function(status){
                    if(status.mph === mph){              
                        range =  status.miles;
                    }
                    return range;
                }
        ));
        return range;
    }

    render() {
        
        var rangeModel_75d = this.getStatus(this.props.speed,this.props.temp,this.props.ac,this.props.wheelsize,model_75d);
        var rangemodel_100d = this.getStatus(this.props.speed,this.props.temp,this.props.ac,this.props.wheelsize,model_100d);
        var rangemodel_p100d = this.getStatus(this.props.speed,this.props.temp,this.props.ac,this.props.wheelsize,model_p100d);

        console.log( this.getStatus(this.props.speed,this.props.temp,this.props.ac,this.props.wheelsize,model_75d) );
        return (
            <div className="batterytype-ranges">
                <div className="battery-option battery-option--75D" >
                    <span>
                        <h1 className="battery-badge--75d">75D</h1>
                    </span>                        
                    <span className="battery-range-content">{ rangeModel_75d }</span>
                    <span className="battery-range-units" >KM</span>
                </div>
                <div className="battery-option battery-option--90D">
                    <span>
                        <h1 className="battery-badge--100d">100D</h1> 
                    </span>
                    <span className="battery-range-content">{  rangemodel_100d  }</span>
                    <span className="battery-range-units">KM</span>
                </div>
                <div className="battery-option battery-option--100D">
                    <span >
                        <h1 className="battery-badge--p100d">P100D</h1>
                    </span>
                    <span className="battery-range-content">{  rangemodel_p100d  }</span>
                    <span className="battery-range-units">KM</span>
                </div> 
            </div>    
         );
    }
}


export default BatteryRange;