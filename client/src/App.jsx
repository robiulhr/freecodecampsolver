import Login from "./pages/auth/login.jsx";
import Header from "./sections/header.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import NotFound from "./pages/notFound/index.jsx";
import Home from "./pages/home/index.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  { path: "*", element: <NotFound /> },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
