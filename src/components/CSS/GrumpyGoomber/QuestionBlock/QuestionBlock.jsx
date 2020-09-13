import React from "react";

import classes from "./QuestionBlock.module.css";

const QuestionBlock = () => {
    return (
        <div className={classes.QuestionBlock}>
            <h2 className={classes.QuestionMark}>?</h2>
            <h2 className={classes.Shadow}>?</h2>
        </div>
    );
}

export default QuestionBlock;