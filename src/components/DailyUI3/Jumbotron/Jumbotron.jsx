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
            <img src="https://firebasestorage.googleapis.com/v0/b/mycv-bdfa2.appspot.com/o/plantPapa.svg?alt=media&token=6a37cede-f442-4fd7-b0f4-7f3fb8cced43" alt="plantPapa"/>
        </div>
    );
}

export default Jumbotron;