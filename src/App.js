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
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <Header /> {/* Navbar is inside Header */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="https://djcandikrush.netlify.app/about" element={<About />} />
        <Route path="https://djcandikrush.netlify.app/events" element={<EventShowcase />} />
        <Route path="https://djcandikrush.netlify.app/music" element={<MusicPlayer />} />
        <Route path="*" element={<NotFound />} /> 
        <Route path="https://djcandikrush.netlify.app/admin" element={<Admin />} /> 
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
