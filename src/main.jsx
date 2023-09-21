import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Users from './components/Users/Users.jsx';
import Conact from './components/Conact/Conact.jsx';
import UsersDetails from './components/UsersDetails/UsersDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetail from './components/PostDetails/PostDetail.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
const router =  createBrowserRouter ([
  {
    path:'/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/conact',
        element: <Conact></Conact>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
          path: '/user/:userId',
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
          element: <UsersDetails></UsersDetails>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetail></PostDetail>
      }
    ]
  },
 
  {
    path: '/about',
    element: <div>I am in the about page</div>
  },
  {
    path: '/container',
    element: <div>I am forhad ahmed Call me right now!!</div>
  },
  {
    path: '/forhad',
    element: <div>Owner forhad ahmed @ ! ! ! ! $ % </div>
  }
])  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)


git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/forhadch30/my-website.git
git push -u origin main