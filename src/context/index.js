import * as React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import { ReactQueryCacheProvider } from 'react-query'
import { AuthProvider } from './auth-context'

const queryConfig = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry(failureCount) {
      if (failureCount < 2) {
        return true
      }

      return false
    },
  },
}

function AppProviders({ children }) {
  return (
    <ReactQueryCacheProvider config={queryConfig}>
      <Router>
        <AuthProvider>{children}</AuthProvider>
      </Router>
    </ReactQueryCacheProvider>
  )
}

AppProviders.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export { AppProviders as default }
