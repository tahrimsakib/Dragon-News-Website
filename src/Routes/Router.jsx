import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
]);
