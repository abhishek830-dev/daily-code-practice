import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Homepage from "./2.Homepage";
import AboutPage from "./3.About";
import ContactPage from "./4.Contact";
import UsersList from "../11.Path-Parameter/1.Users-List";
import UserDetails from "../11.Path-Parameter/2.User-Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/home",
    element: <Homepage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/users",
    element: <UsersList />,
  },
  {
    path: "/users/:id/:name",
    element: <UserDetails />,
  },
]);

const SecondRouter = () => {
  return <RouterProvider router={router} />;
};

export default SecondRouter;
