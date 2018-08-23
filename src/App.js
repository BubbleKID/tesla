import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
                <div className="batterytype-ranges">
                    <div className="battery-option battery-option--75D" >
                        <span>
                            <h1 className="battery-badge--75d">75D</h1>
                        </span>                        
                        <span className="battery-range-content">456</span>
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
                <div className="range-controls container">
                    <div className="range-controls--speed">
                        <h2 className="section-subtitle">Speed</h2>
                        <div className="spinner-container">                    
                        <p className="controls-data">
                            <span className="spinner-number">100</span>
                            <span className="spinner-unit">KMH</span>
                        </p>
                        <p className="spinner-controls">
                            <button className="spinner-controls--increase">Up</button>
                            <button className="spinner-controls--decrease">Down</button>
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
