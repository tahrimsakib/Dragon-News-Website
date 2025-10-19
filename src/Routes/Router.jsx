import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";

import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>auaskdfj</h2>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
    ],
  },
]);
