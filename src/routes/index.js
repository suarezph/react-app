import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from '@screens/dashboard'
import Support from '@screens/support'
import NotFoundScreen from '@screens/errors/not-found'

export const AuthenticatedRoutes = {
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  SUPPORT: '/support',
}

export const Layouts = {
  WIDE: 'wide',
  MASTER: 'master',
}

function AppRoutes() {
  return (
    <Switch>
      <Route key="dashboard" path="/dashboard" component={Dashboard} />
      <Route key="support" path="/support" component={Support} />
      <Route key="notfoundscreen" path="*" component={NotFoundScreen} />
    </Switch>
  )
}

export default AppRoutes
