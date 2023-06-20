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

// Страницы товаров
import GiftListPost from './pages/Post/products/1/GiftListPost';   // 1
import PenListPost from './pages/Post/products/2/PenListPost';     // 2
import LineListPost from './pages/Post/products/3/LineListPost';   // 3
import LolaListPost from './pages/Post/products/4/LolaListPost';   // 4
import EzheListPost from './pages/Post/products/5/EzheListPost';   // 5
import BoxListPost from './pages/Post/products/6/BoxListPost';   // 6
import GBListPost from './pages/Post/products/7/GBListPost';   // 7
import Pen2ListPost from './pages/Post/products/8/Pen2ListPost';   // 8
import PlasticineListPost from './pages/Post/products/9/PlasticineListPost';   // 9

// Категории для учёбы
import Tet from './Category_study/Tet';
import Sketch from './Category_study/Sketch';
import Album from './Category_study/Album';
import Marker from './Category_study/Marker';

// Категории для офиса
import Tet_office from './Category_office/Tet';
import Sketch_office from './Category_office/Sketch';
import Album_office from './Category_office/Album';
import Marker_office from './Category_office/Marker';

// Категории для подарков
import Tet_gift from './Category_gift/Tet';
import Sketch_gift from './Category_gift/Sketch';
import Album_gift from './Category_gift/Album';
import Marker_gift from './Category_gift/Marker';

import './App.css';

import heart from "./pictures/heart1.png";
// import list from "./pictures/bumaga.jpg";
import pen from "./pictures/karandash.jpg";
import line from "./pictures/lineyka.jpg";
import lola from "./pictures/lola.jpg";
import book from "./pictures/eghedn.jpg"
import box from "./pictures/penal.jpg";
import gift from "./pictures/podarok.jpg";
import plasticine from "./pictures/plastilin.jpg";

export const posts = [
  {
    id: 2,
    title: "Карандаши цветные",
    price: "649",
    // desc: "Берег",
    heart: `${heart}`,
    img: `${pen}`,
    cat: "/marker"
  },
  {
    id: 3,
    title: "Линейка",
    price: "49",
    // desc: "Отражение",
    heart: `${heart}`,
    img: `${line}`,
    cat: `/marker`
  },
  {
    id: 4,
    title: 'Мягкая игрушка "Soft Bunny"',
    price: "1 949",
    // desc: "Летняя резиденция",
    heart: `${heart}`,
    img: `${lola}`,
    cat: `/marker`
  },
  {
    id: 5,
    title: 'Ежедневник "Lola"',
    price: "699",
    // desc: "Берег",
    heart: `${heart}`,
    img: `${book}`,
    cat: `/sketch`
  },
  {
    id: 6,
    title: 'Пенал "Cold"',
    price: "379",
    // desc: "Отражение",
    heart: `${heart}`,
    img: `${box}`,
    cat: `/sketch`
  },
  {
    id: 7,
    title: 'Подарочный набор "Lola & Bugs"',
    price: "2 750",
    // desc: "Отражение",
    heart: `${heart}`,
    img: `${gift}`,
    cat: `/tet`
  },
  {
    id: 8,
    title: "Набор цветных карандашей",
    price: "199",
    // desc: "Отражение",
    heart: `${heart}`,
    img: `${pen}`,
    cat: `/marker`
  },
  {
    id: 9,
    title: "Пластилин",
    price: "449",
    // desc: "Отражение",
    heart: `${heart}`,
    img: `${plasticine}`,
    cat: `/marker`
  }
];

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
      // Страницы товаров
      {
        path: "/post/1",
        element: <GiftListPost />
      },
      {
        path: "/post/2",
        element: <PenListPost />
      },
      {
        path: "/post/3",
        element: <LineListPost />
      },
      {
        path: "/post/4",
        element: <LolaListPost />
      },
      {
        path: "/post/5",
        element: <EzheListPost />
      },
      {
        path: "/post/6",
        element: <BoxListPost />
      },
      {
        path: "/post/7",
        element: <GBListPost />
      },
      {
        path: "/post/8",
        element: <Pen2ListPost />
      },
      {
        path: "/post/9",
        element: <PlasticineListPost />
      },
      // Категории учёбы
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
      },
      // Категории офиса
      {
        path: "/office/tet",
        element: <Tet_office />
      },
      {
        path: "/office/sketch",
        element: <Sketch_office />
      },
      {
        path: "/office/album",
        element: <Album_office />
      },
      {
        path: "/office/marker",
        element: <Marker_office />
      },
      // Категории подарков
      {
        path: "/gift/tet",
        element: <Tet_gift />
      },
      {
        path: "/gift/sketch",
        element: <Sketch_gift />
      },
      {
        path: "/gift/album",
        element: <Album_gift />
      },
      {
        path: "/gift/marker",
        element: <Marker_gift />
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