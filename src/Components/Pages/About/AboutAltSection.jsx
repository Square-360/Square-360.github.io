import React from "react";
import img from "../../../Images/AboutAlt.png";

function AboutAltSection() {
  return (
    <section
      className="about relative sm:pt-36 sm:pb-16 lg:pt-52 lg:pb-20"
      id="about-section"
    >
      <h1 className="about-title lg:top-[120px] xl:top-[100px]">
        Расскажем о нас
      </h1>
      <div className="container relative z-20">
        <div className="flex-box sm:flex-col xl:flex-row">
          <div className="max-w-md text-2xl mb-5">
            <h1 className="font-bold mb-4 sm:text-center sm:text-[28px] lg:text-[30px] xl:text-left">
              Что такое “Square360”?
            </h1>
            <p className="text-xl sm:text-lg md:text-xl">
              Square360 - новая и прогрессивная IT команда. Мы занимаемся
              разработкой мобильных игр и приложений.
              <br />
              <br /> Наша задача - создавать впечатляющие, захватывающие игры
              или практичные и удобные приложения.
              <br />
              <br /> Одна из актуальных задач команды на сегодняшний день - это
              разработать новую мобильную игру на движке Unity.
            </p>
          </div>
          <img
            className="w-[580px] h-[360px] rounded-[30px] sm:h-auto"
            src={img}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default AboutAltSection;
