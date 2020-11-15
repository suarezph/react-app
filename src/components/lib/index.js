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

function ErrorMessage({ error, ...props }) {
  return (
    <div {...props}>
      <span>There was an error: </span>
      <pre>{error.message}</pre>
    </div>
  )
}

ErrorMessage.defaultProps = {
  props: {},
}

ErrorMessage.propTypes = {
  error: PropTypes.oneOfType([PropTypes.object]).isRequired,
  props: PropTypes.oneOfType([PropTypes.object]),
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

const isUserAuthorised = (abilites = [], comparison) =>
  abilites.includes(comparison)

export {
  FullPageSpinner,
  FullPageErrorFallback,
  ErrorMessage,
  isUserAuthorised,
}
