import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { useAuth } from '@context/auth-context'
import PrivateRoutes from '@routes/private-routes'

function auth() {
  const { user, logout } = useAuth()
  return (
    <div>
      <nav>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
        <li>
          <Button variant="outlined" color="primary" onClick={logout}>
            Logout
          </Button>
        </li>
      </nav>
      <main>
        <h5>Hi {user.name}</h5>
        <PrivateRoutes />
      </main>
    </div>
  )
}

export default auth
