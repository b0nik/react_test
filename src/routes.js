import React from 'react';
import { Route, IndexRoute } from 'react-router';
/* containers */
import  {App} from './containers/App/index.js';
import main from './containers/Main/index.js'
import Page404 from './containers/404/404.js'



export default (
    <Route path="/" component={App}>
        <IndexRoute component={main}></IndexRoute>
        <Route status={404} path="*" component={Page404}/>
    </Route>
);