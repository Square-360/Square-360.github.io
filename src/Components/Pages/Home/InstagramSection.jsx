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
                className="w-[190px] rounded-full my-[22px] hover:scale-[1.05] transition-all"
              />
              <p className="text-center font-bold text-[22px]">square360_team</p>
            </a>
          </div>
          <div class="elfsight-app-a840b625-be0b-4552-86b5-b82c2286decd"></div>
        </div>
      </div>
    </section>
  );
}

export default InstagramSection;
