import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './Header'
// import Button from './Button'
// import Input from './Input'
import Form from './Form'
import Menu from './Menu/Menu'
import pizzas from '../logic/data'
import React from 'react'


const router = createBrowserRouter([
  {
    path: '/',
    element:
      <div className="container">
        <Header>PIZZA DAY</Header>
        <Form/>
      </div>,
  },
  {
    path:'/menu',
    element: <Menu pizzas={pizzas} />,
  }
])

function App() {
  return (
      <React.StrictMode>
        <RouterProvider router={router}/>
      </React.StrictMode>
  )
}

export default App
