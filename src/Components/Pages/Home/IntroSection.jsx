import React from "react";
import { Link } from "react-router-dom";
import MyButton from "../../UI/MyButton/MyButton";
import img from "../../../Images/IntroText.svg"

function IntroSection() {
  return (
    <section className="intro" id="intro-section">
      <div className="container">
        <div className="pt-[340px] pb-[305px] sm:pt-[170px] sm:pb-[140px] lg:pt-[250px] lg:pb-[205px] xl:pt-[305px] xl:pb-[185px]">
          <img src={img} alt="" className="animate-spin absolute z-[1000] top-[150px] sm:hidden lg:block" />
          <div className="relative z-[200] text-center">
            <h1 className="text-white text-[64px] font-black max-w-[890px] mx-auto sm:text-[36px] 
            lg:text-[48px] xl:text-[64px] sm:leading-[1.3] lg:leading-[1.5]">
              Игры - <span className="primary-cl-text">это впечатления,</span> 
              <br /> а Square360 - <span className="primary-cl-text">это игры.</span>
            </h1>
            <p className="intro-text sm:text-[16px] mt-[20px] lg:text-[20px] xl:text-[24px]">
              Рады вас приветствовать на сайте команды "Square360", создающей
              игры и приложения!
            </p>

            <div className="mt-[80px]">
              <div className="mr-[40px] sm:mr-0 sm:block sm:mb-[20px] md:mr-[40px] md:mb-0 md:inline">
                <Link to="/about">
                  <MyButton>Подробнее</MyButton>
                </Link>
              </div>
              <div className="sm:block md:inline">
                <Link to="/projects">
                  <MyButton type="border" className="hover:text-white">Проекты</MyButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
