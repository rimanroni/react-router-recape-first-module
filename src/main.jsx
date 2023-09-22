import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/index.css'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contac from './components/Contace/Contac.jsx';
import Users from './components/Users/Users';
import UserDetils from './components/UserDetils/UserDetils';
import Posts from './components/Posts/Posts';
import PostDesils from './components/PostDetils/PostDesils';
import ErrorPage from './components/Error/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
    errorElement:<ErrorPage/>,
    children:[
    {
        path:"/about",
        element:<About/>
    }, 
    {
      path:'/contac',
      element:<Contac/>
    }, 
    {
      path:'/users',
      loader:()=>fetch('https://jsonplaceholder.typicode.com/users') ,
      element:<Users/>
    }, 
    {
      path:'/user/:id', 
      loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`) ,
      element:<UserDetils/>
    }, 
     {
      path:'/posts',
      loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
      element:<Posts/>
     }, 
     {
      path:'/data/:postId',
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      element:<PostDesils/>
     }
    ]
  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
