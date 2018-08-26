import React, { Component } from 'react';
import './App.css';
import BatteryRange from './components/BatteryRange';
import RangeControls from './components/RangeControls';
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
                <BatteryRange />
                <RangeControls />
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
