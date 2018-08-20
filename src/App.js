import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      
      <body>
          <div>
              <h2 class="section-title">Range per Change</h2>
              <div class="range-hero">
                  <div class="hero-wheels-container"> 
                      <div class="wheels-front wheels-nineteen"></div>
                      <div class="wheels-rear wheels-nineteen"></div>
                  </div>    
              </div>
              <div class="batterytype-ranges">
                  <div>
                      <h1 class="battery-badge--75d">75D</h1>
                      <span>456km</span>
                  </div>
                  <div>
                      <h1 class="battery-badge--100d">100D</h1> 
                      <span>582km</span>
                  </div>
                  <div>
                      <h1 class="battery-badge--p100d">P100D</h1>
                      <span>547km</span>
                  </div> 
              </div>    
              <div class="range-controlscontainer">
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
      </body>
  
    );
  }
}

export default App;
