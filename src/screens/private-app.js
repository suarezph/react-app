import React from 'react'
import PropTypes from 'prop-types'
import { ErrorBoundary } from 'react-error-boundary'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { useAuth } from '@context/auth-context'
import PrivateRoutes from '@routes/private-routes'
import { FullPageErrorFallback, ErrorMessage } from '@components/lib'

function ErrorFallback({ error }) {
  return <ErrorMessage error={error} />
}

ErrorFallback.propTypes = {
  error: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

function privateApp() {
  const { user, logout } = useAuth()
  return (
    <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
      <div>
        <nav>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Button variant="outlined" color="primary" onClick={logout}>
              Logout
            </Button>
          </li>
        </nav>
        <main>
          <h5>Hi {user.name}</h5>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <PrivateRoutes />
          </ErrorBoundary>
        </main>
      </div>
    </ErrorBoundary>
  )
}

export default privateApp
