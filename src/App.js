import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from "./Pages/Weather";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Stop from "./Pages/Stop";
import GetLocation from "./components/Utils/GetLocation";

function App() {
  const [coords, setCoords] = useState("");
  useEffect(() => {
    GetLocation(setCoords);
  }, [coords]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/weather" element={<Weather />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/" element={<Home coords={coords} />} />
          <Route path="/stop/:key" element={<Stop />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
