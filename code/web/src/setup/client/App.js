// Imports
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// App Imports
import { routes } from '../../setup/routes'
import Layout from '../../modules/common/Layout'
import NotFound from '../../modules/common/NotFound'
import RoutePrivate from '../../modules/auth/RoutePrivate'

//The App structure here is super cool. Anyway, this is the App component.
const App = () => (
  /*This Layout component provides the Header and has lots of important info I'll dive into inside it.*/
  <Layout>
  {/*This is a Router Switch and it provides a way to switch between several different routes.*/}
    <Switch>
    {/*This function here maps through all of the routes in the routes object and returns a Route or RoutePrivate depending on the auth key's value.*/}
      {Object.values(routes).map((route, index) => (
        route.auth
          ? <RoutePrivate {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path}/>
          : <Route {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path}/>
      ))}

      {/*This Route provides a route for if the response status code is 404*/}
      <Route component={NotFound}/>
    </Switch>
  </Layout>
)

export default App
