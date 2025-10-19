import React from "react";
import { Outlet } from "react-router";
import Navbar from "../component/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="w-11/12 mx-auto ">
        <Navbar></Navbar>
        <main className="py-6">
          <Outlet></Outlet>
        </main>
      </header>
    </div>
  );
};

export default AuthLayout;
