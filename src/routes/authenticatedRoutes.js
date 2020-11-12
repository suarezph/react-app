import React from 'react'

export const AuthenticatedRoutes = {
  DASHBOARD: '/dashboard',
  SUPPORT: '/support',
}

export const Layouts = {
  Authenticated: 'wide',
  Unauthenticated: 'master',
}

function AppRoutes() {
  return (
    <Routes>
      <Route key="dashboard" path="/dashboard" element={<Dashboard />} />
      <Route key="support" path="/support" element={<Support />} />
      <Route key="notfoundscreen" path="*" element={<NotFoundScreen />} />
    </Routes>
  )
}

export { AuthenticatedRoutes, Layouts }
