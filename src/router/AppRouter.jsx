import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Basket from "../pages/Basket";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

function AppRouter() {
  return (
    <Routes>
      <Route
        element={
          <>
            <Navbar />
            <Outlet />
          </>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
