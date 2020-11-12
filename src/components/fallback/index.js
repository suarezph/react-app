import React from 'react'
import Spinner from '@images/spinner.png'
import PropTypes from 'prop-types'

function FullPageSpinner() {
  return (
    <div>
      <img src={Spinner} alt="Loading..." width="250" height="250" />
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
