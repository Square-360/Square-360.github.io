import React from "react";

function SocialPart() {
  return (
    <div className="flex-box justify-between items-center max-w-md m-auto mt-10">
      <a href="https://www.instagram.com/square360_team/">
        <div className="social-icons flex-box-center sm:w-14 md:w-16 sm:h-14 md:h-16">
          <i className="fab fa-instagram text-3xl text-white sm:text-2xl md:text-3xl"></i>
        </div>
      </a>
      <a href="https://t.me/+n579coQVr38zZDU6">
        <div className="social-icons flex-box-center sm:w-14 md:w-16 sm:h-14 md:h-16">
          <i className="fab fa-telegram-plane text-3xl text-white sm:text-2xl md:text-3xl"></i>
        </div>
      </a>
      <a href="https://github.com/Square-360">
        <div className="social-icons flex-box-center sm:w-14 md:w-16 sm:h-14 md:h-16">
          <i className="fab fa-github text-3xl text-white sm:text-2xl md:text-3xl"></i>
        </div>
      </a>
    </div>
  );
}

export default SocialPart;
