import HomePage from "../pages/index";
import AuthPage from "../pages/Auth";
import ProfilePage from "../pages/Profile";
import { createBrowserRouter } from "react-router-dom";

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
    path: "/test",
    element: <div>test</div>,
  },
];

const router = createBrowserRouter(routes);

export default router;
