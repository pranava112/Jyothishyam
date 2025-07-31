import AllStotras from "./Stotras/AllStotras";
import HanumanChalisa from "./Stotras/HanumanChalisa";
import Home from "./logs/Home";
import KanakadharaStotram from "./Stotras/KanakadharaStotram";
import Layout from "./logs/Layout";
import Map from "./logs/Map";
import PlanetaryPositions from "./PlanetaryPositions"
import React from "react";
import UserDashBoard from "./logs/UserDashBoard";
import VishnusahasranamaStotram from "./Stotras/VishnusahasranamaStotram";
import { createBrowserRouter } from "react-router-dom";

// import ErrorPage from "./ErrorPage";



export const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home/> },
      // { path: "*", element: <ErrorPage /> },
      {path:"/map",element:<Map/>},
      {path:"/DashBoard",element:<UserDashBoard/>},
      {path:"/PlanetaryPositions",element:<PlanetaryPositions/>},
      {path:"/AllStotras",element:<AllStotras/>},
      {path:"/KanakaDharaStotram",element:<KanakadharaStotram/>},
      {path:"/VishnusahasranamaStotram", element:<VishnusahasranamaStotram/>},
      {path:"/HanumanChalisa",element:<HanumanChalisa/>},
    ],
  },
]);
