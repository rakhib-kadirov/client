import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Header from './components/Header';
import Anim from './components/Anim';
import New from './components/New';
import Banner from './components/Banner';
import Products from './components/Products';
import Footer from './components/Footer';

import Study from './pages/Study';
import Office from './pages/Office';
import Gift from './pages/Gift';
import Chat from './pages/Chat/Auth';
import Post from './pages/Post';

import Tet from './Category/Tet';
import Sketch from './Category/Sketch';
import Album from './Category/Album';
import Marker from './Category/Marker';

import './App.css';

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <div className="content-in">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <>
          <Anim />
          <New />
          <Banner />
          <Products />
        </>
      },
      {
        path: "/study",
        element: <Study />
      },
      {
        path: "/office",
        element: <Office />
      },
      {
        path: "/gift",
        element: <Gift />
      },
      {
        path: "/chat",
        element: <Chat />
      },
      {
        path: "/post/:id",
        element: <Post />
      },
      {
        path: "/study/tet",
        element: <Tet />
      },
      {
        path: "/study/sketch",
        element: <Sketch />
      },
      {
        path: "/study/album",
        element: <Album />
      },
      {
        path: "/study/marker",
        element: <Marker />
      }
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
