import React from 'react';
import {Switch, Route} from 'react-router-dom';

import CartPage from './CartPage';

import {ItemDetailMainContainer, ItemListArticleContainer} from './Containers';
import {IndexMainContainer} from './Containers';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './App.css';
import './style.css';


const Routes = () => (
    <Switch>
        <Route exact path='/' component={IndexMainContainer} />
        <Route path='/list' component={ItemListArticleContainer} />
        <Route path='/detail/:id' component={ItemDetailMainContainer} />
        <Route pth='/cart' component={CartPage} />
    </Switch>
)

export default Routes;
