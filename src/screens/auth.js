import React from 'react'
import { Link } from 'react-router-dom'
import AppRoutes from '../routes'

function auth() {
  return (
    <div>
      <nav>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
      </nav>
      <main>
        <AppRoutes />
      </main>
    </div>
  )
}

export default auth
