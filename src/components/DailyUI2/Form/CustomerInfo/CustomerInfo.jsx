import React from "react";

import classes from "./CustomerInfo.module.css";

const CustomerInfo = () => {
    return (
        <div className={classes.CustomerInfo}>
            <label>First and Last Name: </label>
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
            <label>Address: </label>
            <input type="text" placeholder="Address Line 1"/>
            <input type="text" placeholder="Address Line 2"/>
            <input type="text" placeholder="City"/>
            <input type="text" placeholder="State"/>
            <input type="text" placeholder="Zip Code"/>
            <label>Phone Number: </label>
            <p>
                (<input id={classes.PhoneThree} type="text" placeholder="123"/>)
                <input id={classes.PhoneThree} type="text" placeholder="456"/>
                 - <input id={classes.PhoneFour} type="text" placeholder="7890"/>
            
            </p>
            
            <input type="email" placeholder="Email"/>
        </div>
    );
}

export default CustomerInfo;