import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import App from './app'
import AppProviders from './context'
import themes from './themes/default'

/*
 * @TODO:
 * Install profiler
 * Install devtools
 */
ReactDOM.render(
  <ThemeProvider theme={themes}>
    <AppProviders>
      <App />
    </AppProviders>
  </ThemeProvider>,
  document.getElementById('root')
)
