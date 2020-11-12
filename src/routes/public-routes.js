import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '@screens/login'
import Register from '@screens/register'
import NotFoundScreen from '@screens/errors/not-found'

function PublicRoutes() {
  return (
    <Switch>
      <Route key="login" path="/login" component={Login} />
      <Route key="register" path="/register" component={Register} />
      <Route key="notfoundscreen" path="*" component={NotFoundScreen} />
    </Switch>
  )
}

export default PublicRoutes
