import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <span>Home</span>
  },
  {
    path: "/products",
    element: <span>Products</span>
  },
  {
    path: "/about-us",
    element: <span>About Us</span>
  },
  {
    path: "/contact",
    element: <span>Contact</span>
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
