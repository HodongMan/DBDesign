import React from 'react';
import {Switch, Route} from 'react-router-dom';


import {ItemDetailMainContainer, ItemListArticleContainer} from './Containers';
import {IndexMainContainer} from './Containers';
import {CartMainContainer} from './Containers';

import {AdminIndexMainContainer} from './Containers';
import {AdminUserMainContainer} from './Containers';
import {AdminItemMainContainer} from './Containers';
import {AdminPaymentMainContainer} from './Containers';


import './App.css';
import './style.css';


const Routes = () => (
    <div>
        <Route exact path='/' component={IndexMainContainer} />
        <Route path='/list' component={ItemListArticleContainer} />
        <Route path='/detail/:id' component={ItemDetailMainContainer} />
        <Route path='/cart' component={CartMainContainer} />

        <Route path='/admin' component={AdminIndexMainContainer} />
        <Route path='/adminuser' component={AdminUserMainContainer} />
        <Route path='/adminitem' component={AdminItemMainContainer} />
        <Route path='/adminpayment' component={AdminPaymentMainContainer} />
    </div>

)

export default Routes;
