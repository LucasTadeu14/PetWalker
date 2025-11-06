import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { About } from "./pages/about";
import { Layout } from "./components/layout";
import { Error } from "./pages/Error"
import { Private } from "./routes/Private";


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
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export { router };
