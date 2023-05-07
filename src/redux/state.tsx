type arrayDialogsDataType = {
    id: number
    name: string
}

type arrayMessagesDataType = {
    id: number
    message: string
}

type arrayPostDataType = {
    id: number
    message: string
    likeCount: number
}

export type dialogsDataType = Array<arrayDialogsDataType>

export type messagesDataType = Array<arrayMessagesDataType>

export type postDataType = Array<arrayPostDataType>

type profilePageType = {
    dialogs: dialogsDataType
    messages: messagesDataType
}

type myPostsPageType = {
    posts: postDataType
}

export type stateType = {
    profilePage: profilePageType
    myPostsPage: myPostsPageType
}

export let state: stateType = {
    profilePage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Petya'},
            {id: 3, name: 'Andrey'},
            {id: 4, name: 'Valya'},
            {id: 5, name: 'Yura'},
            {id: 6, name: 'Serega'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 1, message: 'How is your it-kamasutra'},
            {id: 1, message: 'yo'}
        ]
    },
    myPostsPage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCount: 15},
            {id: 2, message: 'Its my first post', likeCount: 25},
        ],
    }
}