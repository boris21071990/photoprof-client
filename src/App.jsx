import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import routes from './config/routesConfig';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} component={route.component} exact={route.exact} />
          ))}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
