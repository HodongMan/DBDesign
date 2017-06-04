import React from 'react';
import {Switch, Route} from 'react-router-dom';

import IndexPage from './IndexPage';
import ItemListPage from './ItemListPage';
import ItemDetailPage from './ItemDetailPage';
import CartPage from './CartPage';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './App.css';
import './style.css';


const Routes = () => (
    <Switch>
        <Route exact path='/' component={IndexPage} />
        <Route path='/list' component={ItemListPage} />
        <Route path='/detail' component={ItemDetailPage} />
        <Route pth='/cart' component={CartPage} />
    </Switch>
)

export default Routes;
