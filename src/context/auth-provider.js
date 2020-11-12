/* eslint no-shadow: [2, { "allow": ["error", "data"] }] */
/* eslint-env es6 */
const localStorageKey = '__auth_provider_token__'

async function getToken() {
  return window.localStorage.getItem(localStorageKey)
}

// const authURL = process.env.REACT_APP_API_URL
const authURL = 'https://devapi.bluecell.global/v1'

async function client(endpoint, data) {
  const config = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }

  return window
    .fetch(`${authURL}/${endpoint}`, config)
    .then(async (response) => {
      const data = await response.json()
      if (response.ok) {
        return data
      }

      return Promise.reject(data)
    })
}

function handleUserResponse({ data }) {
  window.localStorage.setItem(localStorageKey, data.access_token)
  /*
   * @TODO:
   * fetch profile here to return then set the data in the context
   */
  return data
}

function login({ email, password }) {
  return client('login', {
    email,
    password,
    login_type: 'member',
    captcha: '1111',
  }).then(handleUserResponse)
}

async function logout() {
  window.localStorage.removeItem(localStorageKey)
}

export { getToken, login, logout, localStorageKey }
