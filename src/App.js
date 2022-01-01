// import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Weather from "./components/Weather";
import Home from "./components/Home";
import Favorite from "./components/Favorite";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>

      <Routes>
        <Route path="/weather" element={<Weather />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
