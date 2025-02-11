import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import Errorpage from './Components/Errorpage';
import Allartifacts from './Components/Allartifacts';
import Addartifacts from './Components/Addartifacts';
import Authprovider from './Components/Authprovider';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Artifactdetails from './Components/Artifactdetails';
import LikedArtifacts from './Components/LikedArtifacts';
import MyArtifacts from './Components/MyArtifacts';
import UpdateArtifact from './Components/UpdateArtifact';
import Review from './Components/Review';
import About from './Components/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace={true}></Navigate>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/allartifacts',
        element: <Allartifacts></Allartifacts>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/addartifacts',
        element: <Addartifacts></Addartifacts>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/artifact-details/:id',
        element: <Artifactdetails></Artifactdetails>,
        
      },
      {
        path: "/liked-artifacts", 
        element: <LikedArtifacts></LikedArtifacts>,
      },
      {
        path:'/my-artifacts',
        element: <MyArtifacts></MyArtifacts>
      },
      {
        path: '/update-artifact/:id',
        element: <UpdateArtifact></UpdateArtifact>
      },
      {
        path: '/review',
        element: <Review></Review>
      }

    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router}></RouterProvider>
    </Authprovider>
  </StrictMode>,
)
