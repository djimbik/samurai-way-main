import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
// classes - объект, ключами которого являются название стилей
// (которые мы придумали)
// не используем в названиях стилей дефис

export const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            {/* NavLink нужен для того, чтобы менять в адресной строке
            браузера адрес, но не делать перезагрузку страницы!   */}
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.active}>Message</NavLink>
            {/* activeClassName={classes.active} - для правильной работы ссылок при модульности   */}
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
            </div>
        </nav>
    )
}