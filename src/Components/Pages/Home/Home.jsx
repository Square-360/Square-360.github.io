import React from "react";
import Header from "../../UI/MyButton/Header/Header";
import AboutSection from "./AboutSection";
import AboutListSection from "./AboutListSection";
import IntroSection from "./IntroSection";
import PortfolioSection from "./PortfolioSection";
import InstagramSection from "./InstagramSection";
import SocialSection from "./SocialSection";
import ScrollToTop from "../../ScrollToTop";

function Home({ elementId }) {
  return (
    <div className="main" id={elementId}>
      <ScrollToTop />
      <Header pageId={elementId} />
      <IntroSection />
      <AboutSection />
      <AboutListSection />
      <PortfolioSection />
      <InstagramSection />
      <SocialSection />
    </div>
  );
}

export default Home;
