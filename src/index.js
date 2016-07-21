import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, useRouterHistory, browserHistory, IndexRoute, Route} from 'react-router';
import { createHashHistory } from 'history';
import route from './routes.js'
import 'whatwg-fetch';
import configureStore from './store/configureStore.js';


import  {App} from './containers/App/index.js';
import main from './containers/Main/index.js'
import Page404 from './containers/404/404.js'


fetch('./no',{
    headers: {
        "X-Requested-With": "XMLHttpRequest"
    }
})
    .then((response)=>{
        return response.json()
    })
    .then((initialState)=>{

        const store = configureStore({pages:initialState});
        const mainPage=store.getState().pages.map((i,item,arr)=>{
            return(
                <Route key={item} path={i.link} component={main}/>
            )
        });
        ReactDOM.render(
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute component={main}></IndexRoute>
                        {mainPage}
                        <Route status={404} path="*" component={Page404}/>
                    </Route>
                </Router>
            </Provider>,
            document.getElementById('root')
        );
    }) ;

