import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/layout/pages/Home";
import AddProduct from "../components/layout/pages/AddProduct";
import ListProduct from "../components/layout/pages/ListProduct";
import EditProduct from "../components/layout/pages/EditProduct";

const MainRoutes = () => {
  let PUBLIC = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/add",
      element: <AddProduct />,
      id: 2,
    },
    {
      link: "/list",
      element: <ListProduct />,
      id: 3,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 4,
    },
  ];

  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
