import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";
import TodoListPage from "./TodoListPage";
import TodoReadPage from "./TodoReadPage";
import TodoInputPage from "./TodoInputPage";

function Index() {
    return (
            <Switch>
                <Route path={'/todo/list'} component={TodoListPage}/>
                <Route path={'/todo/input'} component={TodoInputPage}/>
                <Route path={'/todo/read/:id'} component={TodoReadPage}/>
                <Route path={'/todo'}>
                    <Redirect to={'/todo/list'}/>
                </Route>
            </Switch>
    );
}

export default Index;