import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
//pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { total } from "./redux/features/basketSlice";

function App() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.basket);

  useEffect(() => {
    dispatch(total());
  }, [products]);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
