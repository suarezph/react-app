/* eslint no-shadow: [2, { "allow": ["error", "user"] }] */
/* eslint-env es6 */
import * as React from 'react'
import { queryCache } from 'react-query'
import { useHistory } from 'react-router-dom'
import { FullPageSpinner, FullPageErrorFallback } from '@components/lib'
import client from '../utils/api-client'
import useAsync from '../utils/hooks'
import * as auth from './auth-provider'

const AuthContext = React.createContext()
AuthContext.displayName = 'AuthContext'

async function bootstrapAppData() {
  let user = null

  const token = await auth.getToken()
  if (token) {
    const data = await client('profile', { token })
    // console.log(data)
    // queryCache.setQueryData('list-items', data.listItems, {
    //   staleTime: 5000,
    // })
    user = data.data
  }
  return user
}

function AuthProvider(props) {
  const {
    data: user,
    status,
    error,
    isLoading,
    isIdle,
    isError,
    isSuccess,
    run,
    setData,
  } = useAsync()
  const history = useHistory()

  React.useEffect(() => {
    const appDataPromise = bootstrapAppData()
    run(appDataPromise)
  }, [run])

  const login = React.useCallback(
    (form) =>
      auth.login(form).then((user) => {
        history.location.pathname = '/'
        return setData(user)
      }),
    [setData, history]
  )

  const logout = React.useCallback(() => {
    // set url to '/'
    // remove token: auth.logout
    // clear cache
    // setData to null in Auth context
    history.location.pathname = '/'
    auth.logout()
    queryCache.clear()
    setData(null)
  }, [setData])

  const value = React.useMemo(() => ({ user, login, logout }), [
    login,
    logout,
    user,
  ])

  if (isLoading || isIdle) {
    return <FullPageSpinner />
  }

  if (isError) {
    return <FullPageErrorFallback error={error} />
  }

  if (isSuccess) {
    return <AuthContext.Provider value={value} {...props} />
  }

  throw new Error(`Unhandled status: ${status}`)
}

function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  return context
}

function useClient() {
  const { user } = useAuth()
  const token = user?.token
  return React.useCallback(
    (endpoint, config) => client(endpoint, { ...config, token }),
    [token]
  )
}

export { AuthProvider, useAuth, useClient }
