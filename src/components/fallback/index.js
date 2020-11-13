import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import PropTypes from 'prop-types'

function FullPageSpinner() {
  return (
    <div>
      <CircularProgress />
    </div>
  )
}

function FullPageErrorFallback({ error }) {
  return (
    <div>
      <p>Uh oh... There&apos;s a problem. Try refreshing the app.</p>
      <pre>{error.message}</pre>
    </div>
  )
}

FullPageErrorFallback.propTypes = {
  error: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export { FullPageSpinner, FullPageErrorFallback }
