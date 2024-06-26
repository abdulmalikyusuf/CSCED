import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./routes/root";
import Home from "./routes";
import ErrorPage from "./routes/error-page";
import Overlay from "./components/overlay";
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
    ],
  },
  {
    path: "/test",
    element: <Overlay />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
