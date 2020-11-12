import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '@screens/authentication/login'
import Register from '@screens/authentication/register'
import NotFoundScreen from '@screens/errors/not-found'

function PublicRoutes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route key="login" path="/login" component={Login} />
      <Route key="register" path="/register" component={Register} />
      <Route key="notfoundscreen" path="*" component={NotFoundScreen} />
    </Switch>
  )
}

export default PublicRoutes
