import React from "react";
import classes from './Navbar.module.css'
// classes - объект, ключами которого являются название стилей
// (которые мы придумали)
// не используем в названиях стилей дефис

export const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <a href="samurai-way-main/src/components#">Profile</a>
            </div>
            <div className={classes.item}>
                <a href="samurai-way-main/src/components#">Message</a>
            </div>
            <div className={classes.item}>
                <a href="samurai-way-main/src/components#">News</a>
            </div>
            <div className={classes.item}>
                <a href="samurai-way-main/src/components#">Music</a>
            </div>
            <div className={classes.item}>
                <a href="samurai-way-main/src/components#">Settings</a>
            </div>
        </nav>
    )
}