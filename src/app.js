import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './store/configureStore';
import routes from './containers/index';

const history = createHistory();
const store = configureStore({},history);
const { loadHomeView } = routes;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
         <Route exact path="/" component={ loadHomeView(store) }/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
