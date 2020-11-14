import React from 'react'
import ReactDOM from 'react-dom'
import { I18nextProvider } from 'react-i18next'
import { ThemeProvider } from '@material-ui/core/styles'
import i18n from '@utils/i18next.js'
import App from './app'
import AppProviders from './context'
import themes from './themes/default'

/*
 * @TODO:
 * Install profiler
 * Install devtools
 */
ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <ThemeProvider theme={themes}>
      <AppProviders>
        <App />
      </AppProviders>
    </ThemeProvider>
  </I18nextProvider>,
  document.getElementById('root')
)
