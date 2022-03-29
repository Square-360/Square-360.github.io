import React from "react";
import TeamCard from "./TeamCard";

function TeamSection() {
  return (
    <section className="team relative pb-72 sm:pt-10 sm:pb-32 lg:pt-28 xl:pt-52 lg:pb-56 bg-[#F8F8F8]" id="team-section">
      <h1 className="about-title sm:top-[0px] xl:top-[90px]">Наша команда</h1>
      <h1 className="font-bold mb-[60px] text-center sm:text-[28px] lg:hidden">Наша команда</h1>
      <div className="container">
        <div className="team-wrapper relative z-20">
          <TeamCard name="Тимур" image="Team_1.png" jobList={["Тимлид", "Unity разработчик", "Графический дизайнер"]}/>
          <TeamCard name="Андрей" image="Team_2.png" jobList={["Unity разработчик"]}/>
          <TeamCard name="Светлана" image="Team_3.png" jobList={["SMM маркетолог", "Маркетолог"]}/>
          <TeamCard name="Эльсид" image="Team_4.png" jobList={["Тестировщик под ОП IOS"]}/>
          <TeamCard name="Даниил" image="Team_5.png" jobList={["Тестировщик под ОП Android", "Генератор идей"]}/>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
