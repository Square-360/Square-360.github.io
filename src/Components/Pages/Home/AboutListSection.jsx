import React from "react";
import VanillaTilt from "vanilla-tilt";
import {useEffect} from "react";

function AboutListSection() {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".about-list-item"), {
      max: 20,
      speed: 400,
    });
  }, []);

  return (
    <section className="about-list bg-primary" id="about-list-section">
      <div className="container">
        <div className="flex justify-between items-center lg:py-[70px] sm:pt-[50px] sm:pb-[30px] sm:flex-col xl:flex-row">
          <div className="about-list-item">
            <i className="fas fa-crosshairs"></i>
            <h1>Миссия команды</h1>
            <p>
              Наша миссия - создать качественный и приятный для
              пользования продукт, и в дальнейшем продвинуть его.
            </p>
          </div>

          <div className="about-list-item">
            <i className="far fa-gem"></i>
            <h1>Наши ценности</h1>
            <ul className="md:text-[18px] list-disc ml-[20px]">
              <li>Команда</li>
              <li>Клиент,</li>
              <li>Технологичность,</li>
              <li>Практичность</li>
            </ul>
          </div>

          <div className="about-list-item">
            <i className="fas fa-gamepad"></i>
            <h1>Создание игр</h1>
            <p>
              Мы создаем различные мобильные игры для различных ОП
              преимущественно на движке Unity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutListSection;
