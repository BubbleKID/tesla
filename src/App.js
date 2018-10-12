import React, { Component } from 'react';
import './App.css';
import BatteryRange from './components/BatteryRange';
import SpeedControl from './components/SpeedControl';
import TemperatureControl from './components/TemperatureControl';
import WheelSizeControl from './components/WheelSizeControl';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {           
            ac: "off",
            displaySpeed : 70,
            displayTemp : 10,
            displayWheelSize : 19, 
            tempIndex : 2  
        };
    }  
    setSpeed = (displaySpeed) =>{
        this.setState({displaySpeed});      
    }
    setTemp = (displayTemp) =>{
        this.setState({displayTemp});       
    }
    setAC = (ac) =>{
        this.setState({ac});       
    }
    setWheelSize = (displayWheelSize) =>{
        this.setState({displayWheelSize});       
    }

  render() {
    return ( 
        <div className="main">
            <section className="section-container section-range-calculator hide-on-mobile">
            <div className="section-content">
                <h2 className="section-title">Range per Change</h2>
                <div className="range-hero">
                    <div className="hero-wheels-container"> 
                        <div className="wheels-front wheels-nineteen"></div>
                        <div className="wheels-rear wheels-nineteen"></div>
                    </div>    
                </div>
                <BatteryRange 
                    speed={this.state.displaySpeed}  
                    wheelsize={this.state.displayWheelSize} 
                    temp={this.state.displayTemp} 
                    ac={this.state.ac}
                />
                <div className="range-controls container">
                    <SpeedControl 
                        displaySpeed = { this.state.displaySpeed } 
                        setSpeed = { this.setSpeed }
                    />
                    <TemperatureControl setTemp = { this.setTemp }  setAC = { this.setAC } ac = {this.state.ac} />
                    <WheelSizeControl 
                        displayWheelSize = { this.state.displayWheelSize } 
                        setWheelSize = { this.setWheelSize }  
                    />
                </div>
            </div>  
            </section>
            <section className="section-disclaimer">
                <div className="container">
                    <p>The actual amount of range that you experience will vary based on your particular use conditions. 
                    Your vehicle range is also dependent on other conditions, such as vehicle configuration, battery age and condition,
                    driving style and operating, environmental and climate conditions. See how some of these particular use conditions 
                    may affect your range in our simulation model.
                    </p>
                </div>
            </section>
        </div>
    
    );
  }
}

export default App;
