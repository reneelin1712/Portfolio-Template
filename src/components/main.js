import React from 'react';
import {Switch, Route} from 'react-router-dom';
import home from './home';
import Contact from './contact';
import Project from './project';


const Main = () => {
    return(
    <Switch>
        <Route exact path="/" component={home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/project" component={Project}></Route>


    </Switch>
    )
};

export default Main;