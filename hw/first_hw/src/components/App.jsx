import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Menu from './Menu/Menu'
import pizzas from '../logic/data'
import React from 'react'
import HFpage from './HFpage'
import Orders from './Orders'




const router = createBrowserRouter([
  {
    path: '/',
    element:
      <HFpage />,
  },
  {
    path: '/menu',
    element: <Menu pizzas={pizzas} />,
  },
  {
    path: '/orders',
    element: <Orders />
  }
])

function App() {
  return (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  )
}



export default App
