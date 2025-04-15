import React, { useState, useEffect } from "react";
import sanityClient from "../sanityClient";
// import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const [events, setEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullBio, setShowFullBio] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "event"]{ title, date, "image": image.asset->url }`)
      .then((data) => setEvents(data))
      .catch((error) => console.error("Sanity Fetch Error:", error));
  }, []);

  useEffect(() => {
    if (events.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [events]);

  const handleImageClick = () => {
    navigate("/events");
  };

  return (
    <>
      <div className="landing-page">
        {/* Event Slider */}
        <div
  className="event-slider-background"
  style={{
    backgroundImage: events.length
      ? `url(${events[currentIndex]?.image})`
      : "none",
    }}
  onClick={handleImageClick}
></div>

<div className="event-caption" onClick={handleImageClick}>
  <h2>{events[currentIndex]?.title}</h2>
</div>

<div className="see-events-btn-container">
  <button className="see-events-btn" onClick={handleImageClick}>
    🎶 View Full Lineup
  </button>
</div>

    {/* Floating Music Player */}
    <div className="floating-player">
    <iframe
  title="MixCloud"
  width="100%"
  height="60"
  src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FDjCandikrush%2F"
  frameBorder="0"
  allow="autoplay"
  ></iframe>

    </div>



        {/* Bio Section - Full (Desktop) */}
        <div className="bio-section full-bio-desktop">
          <p className="bio-title">DJ CANDIKRUSH</p>
          <p>
            DJ Candikrush began her career at the tender age of 12, being
            inspired and trained by legends like Grand Wizard Theodore and DJ
            Jimmyphingaz of Washington DC and New York.
          </p>
          <p>
            Candace has been an established DJ for decades — opening for Kurtis
            Blow, touring with the No Profanity Tours, DJing for Adidas, and
            appearing on radio stations both locally and internationally.
          </p>
          <p>
            She is seasoned in many genres of the music industry — from House
            music to Hip-Hop, Underground Jazz, Fusion Rock, and Pop.
          </p>
        </div>

        {/* Bio Section - Compact with "See more…" (Mobile/Tablet) */}
        <div className="bio-section short-bio-mobile">
          <p className="bio-title">DJ CANDIKRUSH</p>
          <p>
            DJ Candikrush began her career at the tender age of 12...
            <span className="see-more" onClick={() => setShowFullBio(true)}>
              {" "}
              See more...
            </span>
          </p>
        </div>

        {/* Fullscreen Modal */}
        {showFullBio && (
          <div className="full-bio-overlay">
            <div className="full-bio-content">
              <button
                className="close-btn"
                onClick={() => setShowFullBio(false)}
              >
                ✕
              </button>
              <h2>Full Bio</h2>
              <p>
                DJ Candikrush began her career at the tender age of 12 being
                inspired and trained by legends like Grand Wizard Theodore and
                DJ Jimmyphingaz of Washington DC and New York. Candace has been
                an Established DJ for decades. She was the opening DJ for Kurtis
                Blow, part of the No Profanity Tours alongside pioneers of
                Hip-Hop, DJed for Adidas, and appeared on radio stations both
                local and abroad. She is seasoned in many genres of the music
                industry — House, Hip-Hop, Underground Jazz, Fusion Rock, and
                Pop — covering all musical tastes.
              </p>
            </div>
          </div>
        )}
      </div>


    </>
  );
};

export default LandingPage;
