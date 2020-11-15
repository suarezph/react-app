import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { ErrorBoundary } from 'react-error-boundary'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { useAuth } from '@context/auth-context'
import PrivateRoutes from '@routes/private-routes'
import { FullPageErrorFallback, ErrorMessage, Can } from '@components/lib'
import LanguageSelector from '@components/language-selector'

function ErrorFallback({ error }) {
  return <ErrorMessage error={error} />
}

ErrorFallback.propTypes = {
  error: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

/**
 * @TODO: user session expired
 * Login to dev.blucell
 * Login to this app with same user you use in dev.blueceel
 * Try to refresh this app and CORS or issue will show up
 */
function privateApp() {
  const { t } = useTranslation()
  const { user, logout } = useAuth()
  return (
    <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
      <div>
        <nav>
          {Can(user.abilities?.borrower_loans, 'create_loan') && (
            <li>
              <Link to="/dashboard">{t('dashboard')}</Link>
            </li>
          )}
          <li>
            <Link to="/support">{t('support')}</Link>
          </li>
          <li>
            <Button variant="outlined" color="primary" onClick={logout}>
              Logout
            </Button>
          </li>
        </nav>
        <main>
          <LanguageSelector />
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
