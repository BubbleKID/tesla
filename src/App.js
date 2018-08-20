import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (    
      <div>
          <div>
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
                      <span>KM</span>
                  </div>
                  <div className="battery-option battery-option--90D">
                      <span>
                        <h1 className="battery-badge--100d">100D</h1> 
                      </span>
                      <span className="battery-range-content">582</span>
                      <span>KM</span>
                  </div>
                  <div className="battery-option battery-option--100D">
                      <span >
                        <h1 className="battery-badge--p100d">P100D</h1>
                      </span>
                      <span className="battery-range-content">547</span>
                      <span>KM</span>
                  </div> 
              </div>    
              <div className="range-controlscontainer">
                  <div>
                      <span>Speed</span>
                      <p>100KMH</p>
                      <p>
                          <button>Up</button>
                          <button>Down</button>
                      </p>
                  </div>
                  <div>
                      <span>Ouside Temperature</span>
                      <p>20</p>
                      <p>
                          <button>Up</button>
                          <button>Down</button>
                      </p>
                  </div>
                  <div>
                  <label>
                      AC OFF
                  </label>>
                  </div>
                  <div>
                      <span>
                          Wheels
                      </span>
                      <label>
                          19
                      </label>
                      <label>
                          21
                      </label>
                  </div>
              </div>
          </div>
          <div>
              The actual amount of range that you experience will vary based on your particular use conditions. 
              Your vehicle range is also dependent on other conditions, such as vehicle configuration, battery age and condition,
              driving style and operating, environmental and climate conditions. See how some of these particular use conditions 
              may affect your range in our simulation model.
          </div>
      </div>
  
    );
  }
}

export default App;
