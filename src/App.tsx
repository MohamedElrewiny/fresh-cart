import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Brands from "./components/Brands/Brands";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Products from "./components/Products/Products";
import ProductDetails from "./components/Products/ProductDetails/ProductDetails";
import Layout from "./components/Layout/Layout";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/brands", element: <Brands /> },
        { path: "/cart", element: <Cart /> },
        { path: "/checkout", element: <Checkout /> },
        { path: "/products", element: <Products /> },
        { path: "/products/:id", element: <ProductDetails /> },
        { path: "/userProfile", element: <UserProfile /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
