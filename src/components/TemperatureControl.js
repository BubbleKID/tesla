
import React, { Component } from 'react';

class TemperatureControl extends Component {
    constructor(props) {
        super(props);
        this.tempIndex = 4;  
        this.tempRange = [-10,0,10,20,30,40];
        this.displayTemp = this.tempRange[this.tempIndex],
        this.ac = "off"
    }

    changeTempIncrease() {       
        if (this.tempIndex < 5 ){   
            this.tempIndex = this.tempIndex + 1;  
            this.displayTemp = this.tempRange[this.tempIndex];  
            this.props.setTemp(this.displayTemp);
            document.querySelector('.range-controls--climate .spinner-number').innerHTML= this.displayTemp;                 
        }   
    }  

    changeTempDecrease() {
        //console.log(this.tempIndex);
        if (this.tempIndex > 0 ){              
            this.tempIndex = this.tempIndex - 1;  
            this.displayTemp = this.tempRange[this.tempIndex];  
            this.props.setTemp(this.displayTemp);
            document.querySelector('.range-controls--climate .spinner-number').innerHTML= this.displayTemp;          
        }       
    }   

    acSwitch(ev){
        ev.preventDefault();
        ev.stopPropagation();
        var acController = document.querySelector(".climate-controller");
        var activate, acText = "";
        this.tempIndex > 2 ? activate="climate-ac"  : activate="climate-heat";
        this.tempIndex > 2 ? acText="AC" : acText ="HEAT";
        acController.classList.remove("climate-on","climate-off","climate-ac","climate-heat");
        //debugger;
        if(this.ac==="off"){
            acController.classList.add("climate-on",activate);
            ev.currentTarget.children[0].children[0].innerText = acText + " ON";  
            this.props.setAC(this.ac);
            this.ac ="on"; 
            return;
        }
        else{    
            acController.classList.add("climate-off",activate);      
            ev.currentTarget.children[0].children[0].innerText = acText + " OFF"; 
            this.props.setAC(this.ac); 
            this.ac ="off";  
            return;
        }
    }

    render(){
        return(
            <div className="range-controls--climate">
                <h2 className="section-subtitle">Ouside Temperature</h2>
                <div className="spinner-container">
                    <p className="controls-data">
                        <span className="spinner-number">{ this.displayTemp }</span>
                        <span className="spinner-unit">°</span>
                    </p>
                    <p className="spinner-controls">
                        <button className="spinner-controls--increase" onClick={() => this.changeTempIncrease()} >Up</button>
                        <button className="spinner-controls--decrease" onClick={() => this.changeTempDecrease()} >Down</button>
                    </p>
                </div>
                <div className="climate-controller climate-off climate-ac" onClick={ev => this.acSwitch(ev)} >                     
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