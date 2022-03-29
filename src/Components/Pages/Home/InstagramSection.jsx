import React from "react";
import instagramLogo from "../../../Images/Insta-icon.png";

function InstagramSection() {
  return (
    <section className="bg-[#e3f3ff] instagram" id="instagram-section">
      <div className="container">
        <div className="sm:pt-[70px] sm:pb-[90px] lg:pt-[105px] lg:pb-[120px]">
          <h1 className="title mb-[30px]">А вот и инстаграм!</h1>
          <div className="flex items-center justify-center mb-[50px]">
            <a href="https://www.instagram.com/square360_team/">
              <img
                src={instagramLogo}
                alt=""
                className="w-[190px] rounded-full mt-[22px] hover:scale-[1.05] transition-all"
              />
            </a>
          </div>
          <iframe
            src="//lightwidget.com/widgets/028a8a8f71635b46ac2de8181952d5ba.html"
            scrolling="no"
            allowtransparency="true"
            className="lightwidget-widget w-full border-0 overflow-hidden"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default InstagramSection;
