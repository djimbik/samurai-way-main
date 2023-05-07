import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {stateType} from "./redux/state";

type AppPropsType = {
    state: stateType
}

function App(props: AppPropsType) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'} render={() => <Dialogs
                    dialogsData={props.state.profilePage.dialogs}
                    messagesData={props.state.profilePage.messages}/>}/>
                {/*// чтобы Route работал - переходы на другие страницы, надо обернуть все в BrowserRouter*/}
                <Route path={'/profile'} render={() => <Profile postData={props.state.myPostsPage.posts}/>}/>
                {/*path={'/profile'} - это должно совпадать с href в ссылках*/}
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>
    );
}

export default App;
