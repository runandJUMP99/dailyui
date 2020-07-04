import React from "react";

import Control from "./Control/Control";
import FastForwardIcon from '@material-ui/icons/FastForward';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

import classes from "./Controls.module.css";

const Controls = () => {
    return (
        <div className={classes.Controls}>
            <Control icon={<SkipPreviousIcon fontSize="large"/>} />
            <Control icon={<FastRewindIcon fontSize="large"/>} />
            <Control icon={<PlayArrowIcon fontSize="large"/>} />
            <Control icon={<FastForwardIcon fontSize="large"/>} />
            <Control icon={<SkipNextIcon fontSize="large"/>} />
        </div>
    );
}

export default Controls;