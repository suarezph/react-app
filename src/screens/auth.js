import React from 'react'
import { Link } from 'react-router-dom'
import AppRoutes from '@routes'

function auth() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/finished">Finished Books</Link>
          </li>
          <li>
            <Link to="/discover">Discover</Link>
          </li>
        </ul>
      </nav>
      <main>
        <AppRoutes />
      </main>
    </div>
  )
}

export default auth
