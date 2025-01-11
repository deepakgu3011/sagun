import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index1.css";
import FooterForm from "./pages/Footer";
import KiteFlying from "./pages/KiteFling";

function App() {
  const [userName, setUserName] = useState("");
  const [shareUrl, setShareUrl] = useState("");
  const [countdown, setCountdown] = useState(""); // State for the countdown

  // Load the user's name from local storage when the app loads
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    } else {
      const urlParams = new URLSearchParams(window.location.search);
      const nameFromUrl = urlParams.get("name");
      if (nameFromUrl) {
        setUserName(nameFromUrl);
        localStorage.setItem("userName", nameFromUrl);
      }
    }

    // Function to calculate the countdown
    const targetDate = new Date("January 14, 2025 00:00:00"); // Target date
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeLeft = targetDate - now; // Time difference in milliseconds

      if (timeLeft <= 0) {
        clearInterval(intervalId);
        setCountdown("It's time!"); // When the countdown reaches zero
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`); // Set the countdown string
      }
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval when the component is unmounted
  }, []); // This runs only once when the component mounts

  const handleNameSubmit = (name) => {
    setUserName(name);
    localStorage.setItem("userName", name);

    const uniqueUrl = `${window.location.origin}?name=${name}`;
    setShareUrl(uniqueUrl);
  };

  // Create share message
  const shareMessage = `${userName} ने आपके लिए कुछ भेजा है! इसे देखें: ${shareUrl}`;

  return (
    <div>
      <header className="text-center py-3 bg-warning" id="head">
        <h1>
          <span className="makar">मकर</span>
          <span className="sankranti">संक्रांति</span>
          <span className="shubhkamnaye">शुभकामनाएँ</span>
        </h1>

        <p className="lead">खुशियाँ और पतंगों के साथ इस त्यौहार को मनाएं!</p>
      </header>

      <main className="container text-center my-5">
        <h2>
          {userName
            ? `${userName} की ओर से आपके और उनके परिवार को मकर संक्रांति की हार्दिक शुभकामनाएँ!`
            : "अपना नाम नीचे डालें ताकि आप अपना नाम कस्टमाइज़ कर सकें!"}
        </h2>

        {/* Countdown Timer */}
        <div className="countdown">
          <p className="btn btn-primary">{countdown}</p>
        </div>

        {/* Kite Flying Animation */}
        <KiteFlying />

        {/* Display the shareable URL */}
        {shareUrl && (
          <div className="mt-3">
            <p>Share this unique URL with your friends:</p>
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="form-control text-center"
              onClick={(e) => e.target.select()} // Select all text on click for easy copying
            />
            {/* Share Buttons */}
            <div className="mt-3 d-flex justify-content-center">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(shareMessage)}`}
                className="btn btn-success mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Share on WhatsApp
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  shareUrl
                )}&quote=${encodeURIComponent(shareMessage)}`}
                className="btn btn-primary mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Share on Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  shareMessage
                )}`}
                className="btn btn-info mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Share on Twitter
              </a>
            </div>
          </div>
        )}
      </main>

      <FooterForm onNameSubmit={handleNameSubmit} />
    </div>
  );
}

export default App;
