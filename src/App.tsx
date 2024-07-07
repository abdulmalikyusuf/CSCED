import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./routes/root";
import AboutUs from "./routes/about-us";
import OurMission from "./routes/our-mission";
import TheTeam from "./routes/the-team";
import ContactUs from "./routes/contact-us";
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
      {
        path: "our-mission",
        element: <OurMission />,
      },
      {
        path: "the-team",
        element: <TheTeam />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
