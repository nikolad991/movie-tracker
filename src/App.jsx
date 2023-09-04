import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="bg-neutral-700 min-h-screen shadow-transparent">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
