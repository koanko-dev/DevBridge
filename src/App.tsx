import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import FindJobsPage from "./pages/FindJobsPage";
import SavedJobsPage from "./pages/SavedJobsPage";
import { tokenLoader } from "./util/auth";
import AuthPage, { action as authAction } from "./pages/AuthPage";
import { action as logoutAction } from "./pages/Logout";
import UserProfilePage from "./pages/UserProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    loader: tokenLoader,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "jobs", element: <FindJobsPage /> },
      { path: "saved_jobs", element: <SavedJobsPage /> },
      { path: "auth", element: <AuthPage />, action: authAction },
      { path: "profile", element: <UserProfilePage /> },
      { path: "logout", action: logoutAction },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
