import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Dashboard from '@screens/dashboard'
import NotFoundScreen from '@screens/errors/not-found'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  )
}

export default AppRoutes
