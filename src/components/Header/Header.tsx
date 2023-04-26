import React from "react";
import classes from './Header.module.css';

export const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://c.wallhere.com/photos/3a/41/2560x1440_px_Colorful_Gradient-1324085.jpg!d"
                 alt="main logo" width={150}/>
        </header>
    )
}