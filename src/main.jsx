import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layout/MainLayout.jsx'
import Home from './Components/Home.jsx'
import Addcoffee from './Components/Addcoffee.jsx'
import UpdateCoffee from './Components/UpdateCoffee.jsx'
import Coffeedeails from './Components/Coffeedeails.jsx'


const router = createBrowserRouter([


  {path:'/', Component:MainLayout,

    children:[

      {index:true,
       
       loader:()=>fetch('http://localhost:4000/coffee'),
        
        Component:Home},

      {path:"addcoffee",Component:Addcoffee },
      {path:'updateCoffee/:id',
        
           loader:({params})=>fetch(`http://localhost:4000/coffee/${params.id}`),
        Component:UpdateCoffee},
      {path:'/coffee/:id',
        
        loader:({params})=>fetch(`http://localhost:4000/coffee/${params.id}`),
        Component:Coffeedeails}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
