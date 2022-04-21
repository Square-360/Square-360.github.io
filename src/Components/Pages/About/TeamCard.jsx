import React from "react";
import VanillaTilt from "vanilla-tilt";
import {useEffect} from "react";

function TeamCard({ name, image, jobList }) {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".team-card"), {
      max: 25,
      speed: 500,
    });
  }, []);

  return (
    <div className="team-card bg-[#ffffff] drop-shadow-xl rounded-[30px] text-center pt-[35px] pb-[65px] 
    sm:pt-[20px] sm:pb-[45px] md:pt-[35px] md:pb-[65px] sm:w-[90%] sm:mx-auto md:w-auto md:mx-0" data-tilt data-tilt-reverse="true">
      <img src={"https://square-360.github.io/Team_cards/" + image} alt="" className="mx-auto" />
      <h3 className="text-primary mt-[25px] font-bold sm:text-[24px] md:text-[32px] lg:text-[36px]">{name}</h3>
      <ul className="list-disc ml-[50px]">
        {jobList.map((item) => {
          return <li className="sm:text-[18px] md:text-[22px] text-left" key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default TeamCard;
