import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './components/Provider/AuthProvider.jsx';
import DetailsNews from './components/DetailsNews/DetailsNews.jsx';
import About from './components/About/About.jsx';
import Privet from './Privet/Privet.jsx';
import Course from './components/Course/Course.jsx';
import Company from './components/Company/Company.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('../news.json')
      },
      {
        path:'/about',
        element:<Privet><About></About></Privet>
      },
      {
        path:'/details/:_id',
        element:<DetailsNews></DetailsNews>,
        loader:()=>fetch('../news.json')
        
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/course',
        element:<Course></Course>
      },
      {
        path:'/company',
        element:<Company></Company>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider >
  </StrictMode>,
)
