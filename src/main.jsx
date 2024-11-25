import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Home.jsx'
import Users from './Users.jsx'
import Update from './Update.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/users",
        element: <Users></Users>,
        loader : ()=> fetch('http://localhost:5000/users')
      },
      {
        path:'/user/:id',
        element: <Update></Update>,
        loader : ({params})=> fetch(`http://localhost:5000/users/${params.id}`)
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
