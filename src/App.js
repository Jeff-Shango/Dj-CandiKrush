import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import EventShowcase from "./pages/EventShowcase";
import MusicPlayer from "./pages/MusicPlayer";
import Header from "./pages/Header"; 
import Footer from "./Footer";
import "./styles/App.css";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Header /> {/* Navbar is inside Header */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<EventShowcase />} />
        <Route path="/music" element={<MusicPlayer />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for invalid routes */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
