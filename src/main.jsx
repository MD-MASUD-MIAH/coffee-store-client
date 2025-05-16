import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Addcoffee from "./Components/Addcoffee.jsx";
import Coffeedeails from "./Components/Coffeedeails.jsx";
import AuthProvider from "./Components/context/AuthProvider.jsx";
import Home from "./Components/Home.jsx";
import SingIn from "./Components/SingIn.jsx";
import Singup from "./Components/Singup.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import User from "./Components/User.jsx";
import "./index.css";
import MainLayout from "./layout/MainLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,

    children: [
      {
        index: true,

        loader: () =>
          fetch("https://coffee-store-server-one-ashen.vercel.app/coffee"),

        Component: Home,
      },

      { path: "addcoffee", Component: Addcoffee },
      {
        path: "updateCoffee/:id",

        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-one-ashen.vercel.app/coffee/${params.id}`
          ),
        Component: UpdateCoffee,
      },
      {
        path: "/coffee/:id",

        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-one-ashen.vercel.app/coffee/${params.id}`
          ),
        Component: Coffeedeails,
      },

      { path: "singin", Component: SingIn },
      { path: "singup", Component: Singup },
      {
        path: "user",

        loader: () =>
          fetch("https://coffee-store-server-one-ashen.vercel.app/user"),
        Component: User,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
