import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Menu from './Menu/Menu'
import pizzas from '../logic/data'
import React from 'react'
import HFpage from './HFpage'
import Orders from './Orders'
import Context from '../logic/Context'




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
      <Context>
        <RouterProvider router={router} />
      </Context>
    </React.StrictMode>
  )
}



export default App
