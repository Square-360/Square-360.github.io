import React from "react";

function ProjectItem({ project }) {
  return (
    <div className="mb-36 sm:mb-24 lg:mb-32 xl:mb-36">
      <h1 className="title">
        {project.title}
      </h1>
      <div className="flex-box w-full mt-28 sm:mt-8 sm:flex-col md:mt-14 xl:flex-row">
        <p className="max-w-lg text-xl sm:text-lg md:text-xl">{project.desc}</p>
        <div className="projects-card">
          <img
            src={project.img}
            alt=""
            className="relative z-30"
          />
          <a href={project.link}>
            <button className="portfolio-btn projects-button">
              Скачать на Android
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
