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
import Reviews from "./pages/Reviews.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

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
      {
        path: "/reviews/:id",
        element: <Reviews />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
