import React from "react";

import Slider from "./Slider/Slider";

import classes from "./Sliders.module.css";

const Sliders = (props) => {
    return (
        <div className={classes.Sliders}>
            <Slider 
                name="Temp" 
                min="50"
                max="95"
                value={props.values.Temp}
                onChange={props.onChange}
                onSlide={props.onSlide} />
            <Slider 
                name="Volume" 
                min="0"
                max="100"
                value={props.values.Volume}
                onChange={props.onChange}
                onSlide={props.onSlide} />
            <Slider 
                name="Lights" 
                min="0"
                max="100"
                value={props.values.Lights}
                onChange={props.onChange}
                onSlide={props.onSlide} />
        </div>
    );
}

export default Sliders;