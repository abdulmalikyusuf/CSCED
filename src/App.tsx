import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./routes/root";
import AboutUs from "./routes/about-us";
import Home from "./routes";
import ErrorPage from "./routes/error-page";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
