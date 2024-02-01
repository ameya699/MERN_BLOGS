import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import ErrorPage from "./Components/ErrorPage"
import Home from "./Components/Home"
import PostDetail from "./Components/PostDetail"
import Register from "./Components/Register"
import Login from "./Components/Login"
import UserProfile from "./Components/UserProfile"
import Authors from "./Components/Authors"
import CreatePost from "./Components/CreatePost"
import CategoryPosts from "./Components/CategoryPosts"
import AuthorPosts from "./Components/AuthorPosts"
import Dashboard from './Components/Dashboard';
import EditPost from "./Components/EditPost"
import Logout from "./Components/Logout";
import DeletePost from "./Components/DeletePost"
import UserProvider from './context/userContext';

const router=createBrowserRouter([
  {
    path:"/",
    element:<UserProvider><Layout/></UserProvider>,
    errorElement:<ErrorPage/>,
    children:[
      {index:true,element:<Home/>},
      {path:"posts/:id",element:<PostDetail/>},
      {path:"register",element:<Register/>},
      {path:"login",element:<Login/>},
      {path:"profile/:id",element:<UserProfile/>},
      {path:"authors",element:<Authors/>},
      {path:"create",element:<CreatePost/>},
      {path:"posts/categories/:category",element:<CategoryPosts/>},
      {path:"posts/users/:id",element:<AuthorPosts/>},
      {path:"myposts/:id",element:<Dashboard/>},
      {path:"posts/:id/edit",element:<EditPost/>},
      {path:"posts/:id/delete",element:<DeletePost/>},
      {path:"logout",element:<Logout/>}

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

