import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { About } from "./pages/about";
import { Layout } from "./components/layout";
import { Error } from "./pages/Error"
import { Private } from "./routes/Private";
import { Products } from "./pages/products"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/*",
    element: <Error />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Private><Home /></Private>,
      },
      {
        path: "/cart",
        element: <Private><Cart /></Private>,
      },
      {
        path: "/about",
        element: <Private><About /></Private>,
      },
      {
        path: "/Products",
        element: <Private><Products /></Private>,
      },
    ],
  },
]);

export { router };
