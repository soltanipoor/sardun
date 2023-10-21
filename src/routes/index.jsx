import HomePage from "../pages/index";
import AuthPage from "../pages/Auth";
import ProfilePage from "../pages/Profile";
import { createBrowserRouter } from "react-router-dom";
import Ui from "../pages/Ui";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/ui",
    element: <Ui />,
  },
];

const router = createBrowserRouter(routes);

export default router;
