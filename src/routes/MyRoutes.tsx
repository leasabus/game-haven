import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { UserRoutes } from "./routes";

export const MyRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={UserRoutes.HOME} element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
