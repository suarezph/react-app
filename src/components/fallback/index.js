import React from 'react'
import Spinner from '@images/spinner.png'

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
      <p>Uh oh... There's a problem. Try refreshing the app.</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export { FullPageSpinner, FullPageErrorFallback }
