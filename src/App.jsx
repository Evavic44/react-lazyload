import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Blur from "./pages/Blur.jsx";
import Default from "./pages/Default.jsx";
import Placeholder from "./pages/Placeholder.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="blur" element={<Blur />} />
      <Route path="default" element={<Default />} />
      <Route path="placeholder" element={<Placeholder />} />
    </Routes>
  );
}

export default App;
