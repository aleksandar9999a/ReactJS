import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import AddCatFood from './components/AddCatFood';
import AllCatFood from './components/AllCatFood';

const AppRouter = () => (
    <div>
        <Route path='/home' component={Home} />
        <Route path='/add' component={AddCatFood} />
        <Route path='/all' component={AllCatFood} />
    </div>
)

export default AppRouter;