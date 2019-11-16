import React from 'react';
import { Router } from 'dva/router';

import routes from './router.config';
import RouterViews from './routerViews'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <RouterViews routes={routes.routes}/>
    </Router>
  )
}

export default RouterConfig;
