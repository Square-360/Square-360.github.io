import React from "react";
import FooterColOne from "./FooterColOne";
import FooterColTwo from "./FooterColTwo";
import FooterColThree from "./FooterColThree";

function Footer() {
  return (
    <footer className="footer bg-black">
      <div className="container">
        <div className="footer-inner">
          {/* Col-1 */}

          <FooterColOne />

          {/* Col-2 */}

          <FooterColTwo />

          {/* Col-3 */}

          <FooterColThree/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
