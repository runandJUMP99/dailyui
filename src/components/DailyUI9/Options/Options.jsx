import React from "react";

import Forward10Icon from '@material-ui/icons/Forward10';
import Option from "./Option/Option";
import RepeatIcon from '@material-ui/icons/Repeat';
import Replay10Icon from '@material-ui/icons/Replay10';
import ShuffleIcon from '@material-ui/icons/Shuffle';

import classes from "./Options.module.css";

const Options = () => {
    return (
        <div className={classes.Options}>
            <Option icon={<RepeatIcon fontSize="large"/>}/>
            <Option icon={<Replay10Icon fontSize="large"/>}/>
            <Option icon={<Forward10Icon fontSize="large"/>}/>
            <Option icon={<ShuffleIcon fontSize="large"/>}/>            
        </div>
    );
}

export default Options;