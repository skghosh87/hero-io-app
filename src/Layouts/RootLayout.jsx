import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Container from "../Components/Container";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className=" w-full  flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
