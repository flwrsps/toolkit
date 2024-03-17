import React from "react";

import Admin from "../components/Admin";
import { Route, Routes } from "react-router-dom";
import List from "../components/List";

const MainRoutes = () => {
  const ROUTES = [
    {
      link: "/home",
      element: <List />,
      id: 1,
    },
    {
      link: "/admin",
      element: <Admin />,
      id: 2,
    },
  ];
  return (
    <Routes>
      {ROUTES.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
