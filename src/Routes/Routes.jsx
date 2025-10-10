import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import RootLayout from "../Layouts/RootLayout";
import Error from "../Pages/Error";
import AppDetails from "../Pages/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    hydrateFallbackElement: <p>loading....</p>,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("./appData.json"),
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
      {
        path: "/apps/:id",
        element: <AppDetails />,
      },
    ],
  },
  //   {
  //     path: "*",
  //     element: <Error />,
  //   },
]);
