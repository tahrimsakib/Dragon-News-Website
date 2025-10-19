import React from "react";
import Navbar from "../component/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="w-11/12 mx-auto ">
        <Navbar></Navbar>
      </header>
    </div>
  );
};

export default AuthLayout;
