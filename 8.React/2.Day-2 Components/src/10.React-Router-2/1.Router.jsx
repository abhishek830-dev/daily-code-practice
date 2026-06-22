import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Homepage from "./2.Homepage";
import AboutPage from "./3.About";
import ContactPage from "./4.Contact";
import UsersList from "../11.Path-Parameter/1.Users-List";
import UserDetails from "../11.Path-Parameter/2.User-Details";
import SearchParams from "../12 Query Params/1.Search-Params";
import ColorPicker from "../12 Query Params/2.Color-Chooser";
import DynamicQueryParams from "../12 Query Params/3.Dynamic-Query-Params";
import FlipkartSearchPage from "../12 Query Params/4.Flipkart-search";
import ParticipantsPage from "../12 Query Params/Participants/ParticipantsPage";

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
  {
    path: "/search",
    element: <SearchParams />,
  },
  {
    path: "/color-picker",
    element: <ColorPicker />,
  },
  {
    path: "/dynamic-params",
    element: <DynamicQueryParams />,
  },
  {
    path: "/flipkart",
    element: <FlipkartSearchPage />,
  },
  {
    path: "/Google-meet-Users-list",
    element: <ParticipantsPage />,
  },
  {
    path: "/participants",
    element: <ParticipantsPage />,
  },
]);

const SecondRouter = () => {
  return <RouterProvider router={router} />;
};

export default SecondRouter;
