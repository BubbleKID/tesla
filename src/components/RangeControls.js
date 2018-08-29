import React, { Component } from 'react';

class RangeControls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            speedIndex : 0,
            tempIndex : 0,
            ac: "off" ,
            selectedWheel: 19 
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
        ev.preventDefault();
        ev.stopPropagation();
        //debugger;
        if(this.state.ac==="off"){
            //console.log(this.state.ac); 
            document.querySelector(".climate-ac").className = "climate-controller climate-on climate-ac";  
            ev.currentTarget.children[0].children[0].innerText = "AC ON";
            return this.setState({
                ac:"on"
            });  
            
        }
        else{
            //console.log(this.state.ac); 
            ev.currentTarget.children[0].children[0].innerText = "AC OFF";
            document.querySelector(".climate-ac").className = "climate-controller climate-off climate-ac";  
            return this.setState({
                ac:"off"
            });
        }
    }

    showAC () {

    }
    
    radioChange (ev) {
        ev.stopPropagation();
        if(ev.currentTarget.children[0].value === "19" )
        {
            this.setState({
                selectedWheel: 19
            });
            document.querySelector(".wheelsize-nineteen").className="wheelsize-nineteen selected";  
            document.querySelector(".wheelsize-twentyone").className="wheelsize-twentyone"; 
        }
        else if(ev.currentTarget.children[0].value === "21")
        {
            this.setState({
                selectedWheel: 21
            });
            document.querySelector(".wheelsize-twentyone").className="wheelsize-twentyone selected"; 
            document.querySelector(".wheelsize-nineteen").className="wheelsize-nineteen";  
        }
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
            <div className="range-controls--wheels">
                <h2 className="section-subtitle">Wheels</h2>
                <div className="controls-wheelsize">
                    <label className="wheelsize-nineteen" onClick={ev => this.radioChange(ev)}>
                        <input type="radio" className="sr-only controls-data" name="group1" value="19" ></input>
                            19
                    </label>

                    <label className="wheelsize-twentyone" onClick={ev => this.radioChange(ev)}>
                        <input type="radio" className="sr-only controls-data" name="group1" value="21" ></input>
                            21
                    </label>
                </div>
            </div>
        </div>
      );
    }
    
}


export default  RangeControls;