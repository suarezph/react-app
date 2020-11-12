import React from 'react'
import { FullPageSpinner } from './components/fallback'
import { useAuth } from './context/auth-context'

const AuthenticatedApp = React.lazy(() =>
  import(/* webpackPrefetch: true */ './screens/auth')
)
const UnauthenticatedApp = React.lazy(() => import('./screens/de-auth'))

function App() {
  const { user } = useAuth()

  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  )
}

export default App
