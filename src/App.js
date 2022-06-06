import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/index";
import Sidebar from "./Components/sidebar";
import Favorite from "./Pages/Favorite";
import Stroke from "./Components/screen/Stroke";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar />
        <Stroke />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="favorites" element={<Favorite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
