import React, { Component } from 'react';
import model_75d from '../data/metric75DMiles.json';
import model_100d from '../data/metric100DMiles.json';
import model_p100d from '../data/metricP100DMiles.json';


class BatteryRange extends Component {
    getStatus = (mph,temp,ac,wheels,model) => {     
       let range;
       const currentStatus = model.filter(status=>status.temp === temp)
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
        const { speed, temp, wheelsize, ac } = this.props;
        const rangeModel_75d = this.getStatus(speed,temp,ac,wheelsize,model_75d);
        const rangemodel_100d = this.getStatus(speed,temp,ac,wheelsize,model_100d);
        const rangemodel_p100d = this.getStatus(speed,temp,ac,wheelsize,model_p100d);
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