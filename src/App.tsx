import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import FindJobsPage from "./pages/FindJobsPage";
import SavedJobsPage from "./pages/SavedJobsPage";

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "jobs", element: <FindJobsPage /> },
      { path: "saved_jobs", element: <SavedJobsPage /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
