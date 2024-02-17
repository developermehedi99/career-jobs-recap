import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Home/Footer";
import Header from "../Home/Header";

const Root = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
