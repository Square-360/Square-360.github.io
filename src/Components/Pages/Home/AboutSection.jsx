import React from "react";
import aboutImg from "../../../Images/TypingCat.gif";

function AboutSection() {
  return (
    <section className="bg-white about" id="about-home-section">
      <div className="container">
        <div className="py-[155px] sm:py-[80px]">
          <h1 className="title">Немного о нас</h1>

          <div className="flex justify-between items-center mt-[120px] sm:flex-col-reverse sm:mt-[24px] lg:flex-row">
            <div className="max-w-[460px]">
              <h3 className="font-bold text-center sm:text-[22px] sm:mb-[35px] sm:mt-[24px] md:mt-[45px] md:mb-[24px] md:text-[24px] xl:text-[34px]">
                Что такое “Square360”?
              </h3>
              <p className="text-[20px] sm:text-[18px] lg:text-[20px]">
                Square360 - молодая и прогрессивная IT команда, занимающаяся
                разработкой мобильных игр и приложений.
                <br /> Наши цели:
              </p>
              <ul className="list-disc text-[20px] sm:text-[18px] lg:text-[20px]">
                  <li className="ml-[25px]">
                    Создавать интересные и завлекающие игры для геймеров или
                    удобные приложения для пользователей
                  </li>
                  <li className="ml-[25px]">Продвинуть свой продукт</li>
                  <li className="ml-[25px]">
                    Заявить миру о существование компании “Square 360”
                  </li>
                </ul>
            </div>

            <div className="rounded-[30px] overflow-hidden w-auto h-[350px] sm:h-[250px] md:h-[350px]">
              <img data-aos="fade-in" src={aboutImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
