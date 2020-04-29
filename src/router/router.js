import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from "../page/Home";
import Phonebook from "../page/Phonebook";
import Setting from "../page/Setting";

export class MainRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path={'/Home'} component={Home} />
                    <Route exact path={'/Phonebook'} component={Phonebook} />
                    <Route exact path={'/Setting'} component={Setting} />
                    <Redirect path={'/'} to={{ pathname: '/Home' }} />
                </Switch>
            </HashRouter>
        );
    }
}