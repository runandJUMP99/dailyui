import React, {useState} from "react";

import FavoriteIcon from '@material-ui/icons/Favorite';

import classes from "./Favorite.module.css";

const Favorite = props => {
    const [styles, setStyles] = useState(null);

    function toggleStyles() {
        if (styles) {
            setStyles(null);
        } else {
            setStyles({
                background: "#10375c",
                color: "#f4f6ff"
            });
        }
    }

    return (
        <div onClick={toggleStyles} className={classes.Favorite} style={styles}>
            <div className={classes.Heart}>
                <FavoriteIcon />
            </div>
        </div>
    );
};

export default Favorite;