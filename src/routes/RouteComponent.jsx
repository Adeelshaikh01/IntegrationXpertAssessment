import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routes";

function RouteComponent() {
  return (
    <Routes>
      {AppRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
}

export default RouteComponent;
