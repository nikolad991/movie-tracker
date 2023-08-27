import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SearchResults from "./pages/SearchResults.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import Home from "./pages/Home.jsx";
import Photos from "./pages/Photos.jsx";
import Videos from "./pages/Videos.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/search/:query",
        element: <SearchResults />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetails />,
      },
      {
        path: "/photos/:id",
        element: <Photos />,
      },
      {
        path: "/videos/:id",
        element: <Videos />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
