import React from "react";
import SocialPart from "../../UI/MyButton/SocialPart";

function SocialSection() {
  return (
    <section className="social" id="social-section">
      <div className="container">
        <div className="py-32">
          <div className="title">Следите за нами в:</div>
          <SocialPart />
        </div>
      </div>
    </section>
  );
}

export default SocialSection;
