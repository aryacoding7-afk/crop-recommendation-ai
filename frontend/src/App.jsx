import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/home";
import CropRecommendation from "./pages/cropai/cropai";
import CropLibrary from "./pages/croplibrary/CropLibrary";
import MandiPrices from "./pages/mandiprice/MandiPrice";
import Footer from "./components/footer/Footer";
import Community from "./pages/community/community";

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommendation" element={<CropRecommendation />} />
        <Route path="/library" element={<CropLibrary />} />
        <Route path="/mandi" element={<MandiPrices />} />
        <Route path="/community" element={<Community/>}></Route>
      </Routes>
      

    </Router>
  );
}

export default App;