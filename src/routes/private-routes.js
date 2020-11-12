import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Dashboard from '@screens/dashboard'
import Support from '@screens/support'
import NotFoundScreen from '@screens/errors/not-found'

function PrivateRoutes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <Route exact key="dashboard" path="/dashboard" component={Dashboard} />
      <Route exact key="support" path="/support" component={Support} />
      <Route exact key="notfoundscreen" path="*" component={NotFoundScreen} />
    </Switch>
  )
}

export default PrivateRoutes
