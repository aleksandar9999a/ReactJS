import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AddCatFood from './components/AddCatFood';
import AllCatFood from './components/AllCatFood';
import NotFoundComponent from './components/NotFoundComponent';

const AppRouter = () => (
    <div>
        <Switch>
            <Route path='/home' exact component={Home} />
            <Route path='/add' exact component={AddCatFood} />
            <Route path='/all/:foodid?' exact component={AllCatFood} />
            <Route component={NotFoundComponent} />
        </Switch>
    </div>
)

export default AppRouter;