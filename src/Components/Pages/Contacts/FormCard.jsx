import React from "react";
import SocialPart from "../../UI/MyButton/SocialPart";
import NewsForm from "./NewsForm";

function FormCard() {
  return (
    <div className="input-form">
      <div className="max-w-[500px] mx-auto">
        <h1 className="mb-[40px] text-center font-bold sm:text-[18px] sm:mb-[20px] md:text-[22px] lg:text-[26px]">
        Остались вопросы? У вас есть интересная идея? Пишите!
        </h1>
        <NewsForm />
        <hr className="mt-[64px] mb-[42px] border-[#D2D2D2]" />
        <SocialPart />
      </div>
    </div>
  );
}

export default FormCard;
