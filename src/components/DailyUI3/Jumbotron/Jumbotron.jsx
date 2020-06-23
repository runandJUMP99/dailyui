import React from "react";

import classes from "./Jumbotron.module.css";

const Jumbotron = () => {
    return (
        <div className={classes.Jumbotron}>
            <div className={classes.Text}>
                <h1>Learning about your favorite plants should <em>not</em> be difficult</h1>
                <p>Find out more about your favorite plants and save them to your profile!</p>
                <a href="/">Start now!</a>
            </div>
            <img src="https://firebasestorage.googleapis.com/v0/b/dailyui-80a05.appspot.com/o/plantDaddy%2FplantPapa.svg?alt=media&token=3e6afc1c-d344-48cc-8fd7-ef0a674d9085" alt="plantPapa"/>
        </div>
    );
}

export default Jumbotron;