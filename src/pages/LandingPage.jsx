import React, { useState, useEffect } from "react";
import sanityClient from "../sanityClient"; // Import Sanity client
import "../styles/LandingPage.css"; // Ensure CSS is linked

const LandingPage = () => {
  const [events, setEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch events from Sanity
  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "event"]{ title, date, "image": image.asset->url }`)
      .then((data) => {
        console.log("Fetched Events:", JSON.stringify(data, null, 2)); 
        setEvents(data);
      })
      .catch((error) => console.error("Sanity Fetch Error:", error));
  }, []);

  // Auto-cycle events every 5 seconds
  useEffect(() => {
    if (events.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [events]); // Runs when `events` is updated

  return (
    <div className="landing-page">
      {/* Event Slider */}
      <div className="event-slider">
        {events.map((event, index) => (
          <div key={index} className={`slide ${index === currentIndex ? "active" : ""}`}>
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-info">
              <h2>{event.title}</h2>
              <p>{event.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bio Section */}
      <div className="bio-section">
        <h2>About the DJ</h2>
        <p>
          This DJ brings an electrifying energy to every set, blending genres seamlessly.
          <span className="see-more" onClick={() => alert("Expand or link to bio page")}> See more...</span>
        </p>
      </div>

      {/* Music Player */}
      <div className="mixcloud-player">
        <iframe
          title="MixCloud"
          width="100%"
          height="60"
          src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FDjCandikrush%2F"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default LandingPage;
