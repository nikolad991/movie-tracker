import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { watchlist } = useSelector((state) => state);
  useEffect(() => {
    localStorage.setItem("movie-watchlist", JSON.stringify(watchlist));
  }, [watchlist]);
  return (
    <div className="bg-home min-h-screen shadow-transparent">
      <NavBar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
