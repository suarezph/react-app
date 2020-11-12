import React from 'react'
import { FullPageSpinner } from './components/fallback'
import { useAuth } from './context/auth-context'

const PrivateApp = React.lazy(() =>
  import(/* webpackPrefetch: true */ './screens/private-app')
)
const PublicApp = React.lazy(() => import('./screens/public-app'))

function App() {
  const { user } = useAuth()

  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      {user ? <PrivateApp /> : <PublicApp />}
    </React.Suspense>
  )
}

export default App
