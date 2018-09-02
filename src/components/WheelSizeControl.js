import React, { Component } from 'react';

class WheelSizeControl extends Component {   
    constructor(props) {
        super(props);   
        this.displayWheelSize = 19;
    }

    radioChange (ev) {
        ev.stopPropagation();
        if(ev.currentTarget.children[0].value === "19" ){
            document.querySelector(".wheelsize-nineteen").className="wheelsize-nineteen selected";  
            document.querySelector(".wheelsize-twentyone").className="wheelsize-twentyone"; 
            this.props.setWheelSize( 19 ); 
        }
        else if(ev.currentTarget.children[0].value === "21"){
            document.querySelector(".wheelsize-twentyone").className="wheelsize-twentyone selected"; 
            document.querySelector(".wheelsize-nineteen").className="wheelsize-nineteen"; 
            this.props.setWheelSize( 21 ); 
        }
    }

    render(){
        return( 
            <div className="range-controls--wheels">
                <h2 className="section-subtitle">Wheels</h2>
                <div className="controls-wheelsize">
                    <label className="wheelsize-nineteen selected" onClick={ev => this.radioChange(ev)}>
                        <input type="radio" className="sr-only controls-data" name="group1" value="19" ></input>
                            19
                    </label>

                    <label className="wheelsize-twentyone" onClick={ev => this.radioChange(ev)}>
                        <input type="radio" className="sr-only controls-data" name="group1" value="21" ></input>
                            21
                    </label>
                </div>
            </div>
        );
    }
}

export default  WheelSizeControl;
