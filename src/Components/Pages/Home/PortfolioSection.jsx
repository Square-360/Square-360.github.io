import React from "react";
import { Link } from "react-router-dom";
import MyButton from "../../UI/MyButton/MyButton";

function PortfolioSection() {
  return (
    <section className="portfolio" id="portfolio-section">
      <div className="container">
        <div className="portfolio-inner">
          <h1 className="title">Примеры проектов:</h1>

          <div className="portfolio-card">
            <div className="portfolio-card-content">
              <h1>The Plumson’s story</h1>
              <Link to="/projects">
                <MyButton type="portfolio-btn">Узнать подробние!</MyButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
