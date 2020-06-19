import React from "react";

import Footer from "./Footer/Footer";
import Jumbotron from "./Jumbotron/Jumbotron";
import PlantSection from "./PlantSection/PlantSection";
import Toolbar from "./Toolbar/Toolbar";

import classes from "./DailyUI3.module.css";

const DailyUI3 = () => {
    return (
        <div className={classes.DailyUI3}>
            <Toolbar />
            <Jumbotron />
            <PlantSection />
            <Footer />
        </div>
    );
}

export default DailyUI3;