import React from "react";

import classes from "./Floor.module.css";

const Floor = (props) => {
    return (
        <div className={classes.Floor} style={{animation: props.start && "auto-scroll 8s linear infinite"}}>
            <div className={classes.FloorChunk}>
                <div className={classes.FloorChunkOuter}></div>
                <div className={classes.FloorChunkDivider}></div>
                <div className={classes.FloorChunkMiddle}></div>
                <div className={classes.FloorChunkDivider}></div>
                <div className={classes.FloorChunkOuter}></div>
            </div>
            <div className={classes.FloorChunk}>
                <div className={classes.FloorChunkOuter}></div>
                <div className={classes.FloorChunkDivider}></div>
                <div className={classes.FloorChunkMiddle}></div>
                <div className={classes.FloorChunkDivider}></div>
                <div className={classes.FloorChunkOuter}></div>
            </div>
            <div className={classes.FloorChunk}>
                <div className={classes.FloorChunkOuter}></div>
                <div className={classes.FloorChunkDivider}></div>
                <div className={classes.FloorChunkMiddle}></div>
                <div className={classes.FloorChunkDivider}></div>
                <div className={classes.FloorChunkOuter}></div>
            </div>
            <div className={classes.FloorChunk}>
                <div className={classes.FloorChunkOuter}></div>
                <div className={classes.FloorChunkDivider}></div>
                <div className={classes.FloorChunkMiddle}></div>
                <div className={classes.FloorChunkDivider}></div>
                <div className={classes.FloorChunkOuter}></div>
            </div>
        </div>
    );
}

export default Floor;