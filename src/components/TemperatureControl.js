import React, { Component } from 'react';
let tempIndex = 4;  
let tempRange = [-10,0,10,20,30,40];
let displayTemp = tempRange[tempIndex];
let ac = "off";
class TemperatureControl extends Component {  
    isAC() { 
        let acController = document.querySelector(".climate-controller");
        let activate, acText = "";
        tempIndex > 2 ? activate="climate-ac"  : activate="climate-heat";
        tempIndex > 2 ? acText="AC" : acText ="HEAT";
        acController.classList.remove("climate-ac","climate-heat");
        if(ac === "off"){
            acController.classList.add(activate);
            document.querySelector(".climate-controller p").innerText = acText + " OFF";  
            return;
        }
        else{    
            acController.classList.add(activate);      
            document.querySelector(".climate-controller p").innerText = acText + " ON"; 
            return;
        }
    }

    changeTempIncrease() {       
        if (tempIndex < 5 ){   
            tempIndex = tempIndex + 1;  
            displayTemp = tempRange[tempIndex];  
            this.props.setTemp(displayTemp);
            document.querySelector('.range-controls--climate .spinner-number').innerHTML = displayTemp; 
            this.isAC();     
        }   
    }  

    changeTempDecrease() {
        if (tempIndex > 0 ){              
            tempIndex = tempIndex - 1;  
            displayTemp = tempRange[tempIndex];  
            this.props.setTemp(displayTemp);           
            document.querySelector('.range-controls--climate .spinner-number').innerHTML = displayTemp; 
            this.isAC();       
        }       
    }   

    acSwitch(ev){
        ev.preventDefault();
        ev.stopPropagation();
        let acController = document.querySelector(".climate-controller");
        let activate, acText = "";
        tempIndex > 2 ? activate="climate-ac"  : activate="climate-heat";
        tempIndex > 2 ? acText="AC" : acText ="HEAT";
        acController.classList.remove("climate-on","climate-off","climate-ac","climate-heat");
        if(ac === "off"){
            acController.classList.add("climate-on",activate);
            ev.currentTarget.children[0].children[0].innerText = acText + " ON";  
            ac = "on"; 
            this.props.setAC(ac);
            return;
        }
        if(ac === "on"){    
            acController.classList.add("climate-off",activate);      
            ev.currentTarget.children[0].children[0].innerText = acText + " OFF"; 
            ac = "off";  
            this.props.setAC(ac);
            return;
        }
    }

    render(){
        return(
            <div className="range-controls--climate">
                <h2 className="section-subtitle">Ouside Temperature</h2>
                <div className="spinner-container">
                    <p className="controls-data">
                        <span className="spinner-number">{ displayTemp }</span>
                        <span className="spinner-unit">°</span>
                    </p>
                    <p className="spinner-controls">
                        <button className="spinner-controls--increase" onClick={() => this.changeTempIncrease()} >Up</button>
                        <button className="spinner-controls--decrease" onClick={() => this.changeTempDecrease()} >Down</button>
                    </p>
                </div>
                <div className="climate-controller climate-ac climate-off" onClick={ev => this.acSwitch(ev)} >                     
                    <label >
                        <p className="controls-text">AC OFF</p>
                        <i className="icon-airconditioning"></i>
                        <input type="radio" className="sr-only controls-data" ></input>
                    </label>                    
                </div>
            </div>   

        );
    }
}


    
export default  TemperatureControl;