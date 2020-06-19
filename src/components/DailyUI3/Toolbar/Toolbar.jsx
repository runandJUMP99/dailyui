import React, {useState} from "react";

import SearchIcon from '@material-ui/icons/Search';

import classes from "./Toolbar.module.css";

const Toolbar = () => {
    const [toolbarMiddle, setToolbarMiddle] = useState(
        <div className={classes.Links}>
            <li>About Us</li>
            <li>Support</li>
            <div onClick={handleClick} style={{marginTop: "0.3rem"}}>
                <SearchIcon />
            </div>
        </div>
    );
    const [show, setShow] = useState(false);

    function handleClick() {
        setToolbarMiddle(<input type="text" style={{
            transform: show ? "translateX(5rem)" : "translateX(0)"
        }}/>);
        setShow(prevValue => (
            !prevValue
        ));
    }

    return (
        <div className={classes.Toolbar}>
            <ul>
                <a href="/">
                    <img src="https://firebasestorage.googleapis.com/v0/b/mycv-bdfa2.appspot.com/o/plantDaddyLogo.svg?alt=media&token=bc46cd7e-1f9c-41db-97cd-1eb9fbfa3c85" alt="plantDaddy Logo"/>
                    <li>plantDaddy</li>
                </a>
                {toolbarMiddle}
                <div className={classes.AccountLinks}>
                    <li>K</li>
                    <li>Log In</li>
                    <li>Sign Up</li>
                </div>
            </ul>
        </div>
    );
}

export default Toolbar;