import classes from './Dialogs.module.css'
import React from "react";
import {NavLink} from "react-router-dom";

type DialogItemProps = {
    name: string
    id: string
}

type MessageProps = {
    textMessage:string
}

function DialogItem(props: DialogItemProps) {
    let path = `/dialogs/${props.id}`

    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

function Message(props: MessageProps) {
    return (
        <div className={classes.message}>
            {props.textMessage}
        </div>
    )
}

export function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={"Dimych"} id={'1'}/>
                <DialogItem name={"Petya"} id={'2'}/>
                <DialogItem name={"Andrey"} id={'3'}/>
                <DialogItem name={"Valya"} id={'4'}/>
                <DialogItem name={"Yura"} id={'5'}/>
                <DialogItem name={"Serega"} id={'6'}/>
            </div>
            <div className={classes.messages}>
                <Message textMessage={'Hi'}/>
                <Message textMessage={'How is your it-kamasutra'}/>
                <Message textMessage={'yo'}/>
            </div>
        </div>
    )
}