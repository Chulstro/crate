// Imports
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// App Imports
import { routes } from '../../setup/routes'
import Layout from '../../modules/common/Layout'
import NotFound from '../../modules/common/NotFound'
import RoutePrivate from '../../modules/auth/RoutePrivate'

// annotating to understand how the routing is set up...

const App = () => (
  <Layout>
    {/* Set up the switch wrapper, so only one exact path can be accessed at a time */}
    <Switch>
      {/* iterating over all routes passed from setup/routes/index.js */}
      {Object.values(routes).map((route, index) => (
        // check if route.auth is truthy...
        route.auth
          ? /* if it is, use the object to set up a RoutePrivate */ 
          <RoutePrivate {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path}/>
          : /* if it's not, make a normal route using the info from the route object */ 
          <Route {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path}/>
      ))}

      {/* default route for 404 page/wrong path */}
      <Route component={NotFound}/>
    </Switch>
  </Layout>
)

export default App
