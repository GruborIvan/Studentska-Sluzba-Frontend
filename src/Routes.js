import React from 'react';
import { Switch, Route } from "react-router-dom";
import AuthComponent from './components/AuthComponent';
import MainComponent from './components/MainComponent';
import ProfesorInfo from './components/profesor/ProfesorInfo';
import StudentInfo from './components/student/StudentInfo';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={MainComponent}/>
        <Route path="/login" component={AuthComponent}/>
        <Route path="/profinfo" component={ProfesorInfo}/>
        <Route path="/studentinfo" component={StudentInfo}/>
    </Switch>
)

export default Routes;