import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { OWNER, PROJECT, SIGNATURE, BUILD_TIME } from './branding'
if (import.meta.env.PROD) {
  console.log(
    `%c${SIGNATURE}%c  ${BUILD_TIME}`,
    'color:#1672e0;font-weight:700;',
    'color:#6b7280;font-weight:400;'
  )
}
import './index.css'
import App from './App'
import Home from './pages/Home'
import Marketplace from './pages/Marketplace'
import Request from './pages/Request'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'marketplace', element: <Marketplace /> },
      { path: 'request', element: <Request /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'admin', element: <Admin /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)