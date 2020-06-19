import React from "react";

import classes from "./PlantToolbar.module.css";

const PlantToolbar = () => {
    return (
        <div className={classes.PlantToolbar}>
            <div>
                <h3>Plants</h3>
                <input type="text" placeholder="Search Plants"/>
            </div>
            <select name="filter" id="filter">
                <option selected disabled hidden>Sort by:</option>
                <option value="size">Size</option>
                <option value="indoor">Indoor</option>
                <option value="outdoor">Outdoor</option>
            </select>
        </div>
    );
}

export default PlantToolbar;