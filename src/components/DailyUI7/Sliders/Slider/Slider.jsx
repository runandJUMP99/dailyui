import React from "react";

import classes from "./Slider.module.css";

const Slider = (props) => {
    return (
        <div className={classes.Slider}>
            <label>{props.name}</label>
            <div className={classes.SliderBar}>
                <button onClick={() => props.onChange(props.name, "decrease")}>-</button>
                <input onChange={(event) => props.onSlide(event)} name={props.name} type="range" min={props.min} max={props.max} value={props.value}/>
                <button onClick={() => props.onChange(props.name, "increase")}>+</button>
            </div>
        </div>
    );
}

export default Slider;