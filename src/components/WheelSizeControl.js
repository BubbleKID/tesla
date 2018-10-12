import React, { Component } from 'react';

class WheelSizeControl extends Component {   
    radioChange (ev) {
        ev.stopPropagation();
        if(ev.currentTarget.children[0].value === "19" ){
            this.props.setWheelSize( 19 ); 
            return;
        }
        if(ev.currentTarget.children[0].value === "21"){
            this.props.setWheelSize( 21 ); 
            return;
        }
    }

    render(){
        return( 
            <div className="range-controls--wheels">
                <h2 className="section-subtitle">Wheels</h2>
                <div className="controls-wheelsize">
                    <label className = {`wheelsize-nineteen  ${this.props.displayWheelSize === 19 && 'selected' }`} onClick={ev => this.radioChange(ev)}>
                        <input type="radio" className="sr-only controls-data" name="group1" value="19" ></input>
                            19
                    </label>
                    <label className = {`wheelsize-twentyone ${this.props.displayWheelSize === 21 && 'selected' }`} onClick={ev => this.radioChange(ev)}>
                        <input type="radio" className="sr-only controls-data" name="group1" value="21" ></input>
                            21
                    </label>
                </div>
            </div>
        );
    }
}

export default  WheelSizeControl;
