import i18n from 'i18next'
import Backend from 'i18next-http-backend'

// https://devapi.bluecell.global/v1/lang?locale=en

/*
 * @TODO: when running dev it should point to locales files and prod will be api call
 * need to learn the settings in i18n
 */

i18n.use(Backend).init({
  lng: 'en',
  fallbackLng: 'en',
  debug: process.env.NODE_ENV === 'dev' ?? true,

  backend: {
    loadPath: `${process.env.REACT_APP_API_URL}/lang?locale={{lng}}`,
  },

  react: {
    wait: true,
  },
})

export default i18n
