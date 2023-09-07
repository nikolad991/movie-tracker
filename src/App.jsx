import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const { watchlist } = useSelector((state) => state);
  useEffect(() => {
    localStorage.setItem("movie-watchlist", JSON.stringify(watchlist));
  }, [watchlist]);
  return (
    <div className="bg-neutral-700 min-h-screen shadow-transparent">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
