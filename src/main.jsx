import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Shope from './components/shope/Shope';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartPRoductsLoader from './CartPRoductsLoader/cartProductsLoader';
import CheackOut from './components/CheackOut/CheackOut';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './components/providers/AuthProvider';
import PrivetRouter from './Routers/PrivetRouter';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Shope></Shope>
      },
      {
        path:'/orders',
        element:<Orders></Orders>,
        loader:cartPRoductsLoader
      },
      {
        path:'/manage inventory',
        element:<PrivetRouter><Inventory></Inventory></PrivetRouter>
      },
      {
        path:'/checkout',
        element:<PrivetRouter><CheackOut></CheackOut></PrivetRouter>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'signup',
        element:<SignUp></SignUp>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
