import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import HomePage from './pages/HomePage';
import PhotosPage from './pages/PhotosPage';
import PhotoPage from './pages/PhotoPage';
import PhotographersPage from './pages/PhotographersPage';
import PhotographerPage from "./pages/PhotographerPage";

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={HomePage} exact />
                    <Route path='/photo/:id' component={PhotoPage} exact />
                    <Route path='/photos' component={PhotosPage} />
                    <Route path='/photographers' component={PhotographersPage} />
                    <Route path='/photographer/:id' component={PhotographerPage} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
