import React from "react";

function KiteFlying() {
  return (
    <div className="kite-container">
      <img
        src="https://www.bing.com/th/id/OGC.136bedcab42af2b048eae0925fda0caf?pid=1.7&rurl=https%3a%2f%2fcdn.pixabay.com%2fanimation%2f2023%2f10%2f31%2f13%2f47%2f13-47-33-733_512.gif&ehk=60phqzyvNwIt9gZuaaDD0Kp5I135dBb8yeNZOgQ0pFo%3d"
        alt="Kite 2"
        className="kite flying-kite-2"
      />
      <style>
        {`
          .kite-container {
            position: relative;
            height: 300px;
            background:url('https://images.news9live.com/wp-content/uploads/2025/01/makar-sankranti-2025.jpg');
               background-size: cover;
          }
          .kite {
            position: absolute;
            width: 100px;
            animation: fly 5s infinite ease-in-out;
          }
        
          .flying-kite-2 {
            animation-duration: 8s;
          }
          @keyframes fly {
            0% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(50px) translateX(50px); }
            100% { transform: translateY(0px) translateX(0px); }
          }
        `}
      </style>
    </div>
  );
}

export default KiteFlying;