import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import AboutUs from "./pages/About-Us/About-Us";
import Contact from './pages/Contact/Contact';
import Navbar from "./components/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/about-us",
        element: <AboutUs />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
