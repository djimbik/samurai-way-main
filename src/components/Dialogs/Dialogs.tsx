import classes from './Dialogs.module.css'
import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {dialogsDataType, messagesDataType} from "../../redux/state";


type dialogsPropsType = {
    dialogsData: dialogsDataType
    messagesData: messagesDataType
}

export function Dialogs(props: dialogsPropsType) {

    const dialogsNames = props.dialogsData.map(item => <DialogItem name={item.name} id={item.id}/>)
    const userMessages = props.messagesData.map(item => <Message textMessage={item.message} id={item.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsNames}
            </div>
            <div className={classes.messages}>
                {userMessages}

            </div>
        </div>
    )
}