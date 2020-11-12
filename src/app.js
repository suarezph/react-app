import React from 'react'
import { FullPageSpinner } from './components/fallback'
import { useAuth } from './context/auth-context'

const PrivateApp = React.lazy(() =>
  import(/* webpackPrefetch: true */ './screens/private-app')
)
const PublicApp = React.lazy(() => import('./screens/public-app'))

/**
 * we can set a redirection (https://reactrouter.com/web/api/Redirect) instead of PrivateApp and PublicApp
 */
function App() {
  const { user } = useAuth()

  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      {user ? <PrivateApp /> : <PublicApp />}
    </React.Suspense>
  )
}

export default App
