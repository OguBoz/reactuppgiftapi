import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './views/Home';
import About from './views/About';
import Signin from './views/Signin';
import { createBrowserHistory } from "history";



export default function Routes() {
    const history = createBrowserHistory();


    return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/about" component={About} />
            </Switch>
    )
}
