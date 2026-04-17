import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Timeline from "../pages/Timeline";
import Analytics from "../pages/Analytics";
import ErrorPage from "../pages/ErrorPage";
import FriendDetails from "../pages/FriendDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch("/friends.json");
          return res.json();
        },
        element: <Home />,
      },
      {
        path: "timeline",
        element: <Timeline />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "friend/:id",
        loader: async () => {
          const res = await fetch("/friends.json");
          return res.json();
        },
        element: <FriendDetails />,
      },
    ],
  },
]);

export default router;