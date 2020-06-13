import React, {useState} from "react";

import classes from "./Coin.module.css";

const Coin = () => {
    const signUp =  <button className={classes.Button} onClick={handleChange}>First time? Sign Up!</button>;
    const signIn =  <button className={classes.Button} onClick={() => handleChange("sign-in")}>Returning? Sign in!</button>

    const [form, setForm] = useState(
        <React.Fragment>
            <h2>Welcome!</h2>
            {signUp}
            {signIn}
        </React.Fragment>
    );
    const [fade, setFade] = useState(false);
    let firstClick = true
    let rotate = "rotateY(0)";

    function handleChange(selection) {
        setFade(prevValue => (
            !prevValue
        ));

        let heading = "Sign Up!";
        let button = signIn;
        
        if (selection === "sign-in") {
            heading = "Sign In!";
            button = signUp;
        }

        if (rotate === "rotateY(180deg)") {
            rotate = "rotateY(0)";
        } else {
            rotate = "rotateY(180deg)";
        }
            
        if (firstClick) {
            firstClick = false;
            rotate = "rotateY(180deg)";
        }

        setTimeout(() => {
            setForm(
                <div className={classes.Form} style={{
                    transform: rotate
                }}>
                    <h2>{heading}</h2>
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                    <button className={classes.Submit}>{heading}</button>
                    {button}
                </div>
            );
        }, 500);
    }

    return (
        <div className={classes.Coin} style={{
            transform: fade ? "rotateY(180deg)" : "rotateY(0)" 
        }}>
            {form}
        </div>
    );
}

export default Coin;