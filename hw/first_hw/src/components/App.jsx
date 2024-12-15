import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Menu from '../pages/menu/Menu'
// import React from 'react'
import HFpage from '../pages/entrypage/HFpage'
import Orders from '../pages/orderspage/Orders'




const router = createBrowserRouter([
  {
    path: '/',
    element:
      <HFpage />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/orders',
    element: <Orders />
  }
])

function App() {
  return (
    
        <RouterProvider router={router} />
   
  )
}



export default App
