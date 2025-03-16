import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import EventShowcase from "./pages/EventShowcase";
import MusicPlayer from "./pages/MusicPlayer";
import Header from "./pages/Header"; 
import Footer from "./Footer";
import "./styles/App.css"

function App() {
  return (
    <Router>
      <Header /> {/* Stays on all pages */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<EventShowcase />} />
        <Route path="/music" element={<MusicPlayer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
