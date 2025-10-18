import React from "react";
import { Outlet } from "react-router";
import Header from "../component/Header";
import LatestNews from "../component/LatestNews";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
      </header>
      <main>
        <section className=" left_side"></section>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="right_side"></section>
      </main>
    </div>
  
  );
};

export default HomeLayout;
