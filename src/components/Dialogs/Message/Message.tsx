import classes from "../Dialogs.module.css";
import React from "react";

type MessageProps = {
    textMessage: string
    id: number
}

export function Message(props: MessageProps) {
    return (
        <div className={classes.message}>
            {props.textMessage}
        </div>
    )
}