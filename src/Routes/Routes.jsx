import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import RootLayout from "../Layouts/RootLayout";
import Error from "../Pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
    ],
  },
  //   {
  //     path: "*",
  //     element: <Error />,
  //   },
]);
