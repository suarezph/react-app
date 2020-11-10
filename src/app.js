import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { FullPageSpinner } from './components/FallbackComponents'

const AuthenticatedApp = React.lazy(() => import('./screens/auth'))

function App() {
  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      <Router>
        <AuthenticatedApp />
      </Router>
    </React.Suspense>
  )
}

export default App
