import React from "react";

function FooterColThree() {
  return (
    <div className="footer-col">
      {/* Title */}
      <h1 className="text-white text-3xl font-black">Социальные сети:</h1>

      {/* Content */}

      <div className="flex-box w-6/12 mt-3 sm:m-auto sm:mt-3">
        <a href="https://www.instagram.com/square360_team/">
          <i className="fab fa-instagram text-3xl text-white"></i>
        </a>
        <a href="https://t.me/+n579coQVr38zZDU6">
          <i className="fab fa-telegram-plane text-3xl text-white"></i>
        </a>
        <a href="https://github.com/Square-360">
        <i className="fab fa-github text-3xl text-white sm:text-2xl md:text-3xl"></i>
        </a>
      </div>
    </div>
  );
}

export default FooterColThree;
