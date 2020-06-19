import React from "react";

import Plants from "./Plants/Plants";
import PlantToolbar from "./PlantToolbar/PlantToolbar";

import classes from "./PlantSection.module.css";

const PlantSection = () => {
    return (
        <div className={classes.PlantSection}>
            <PlantToolbar />
            <Plants />
        </div>
    );
}

export default PlantSection;