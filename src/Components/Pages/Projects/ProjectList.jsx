import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList() {
  let project = [
    {
      id: 1,
      title: "The Plumson's story",
      desc: "Знакомься, это Мистер Пламсон. Вследствие природного бедствия он потерял свой дом. И теперь его единственное желание - это вернуть свой дом обратно. Как-то раз, мистер Пламсон слышал об одной долине, в которой существует кристалл исполняющий желания. Но есть одна проблема, этот кристалл охраняет стражник. Так вот, это история о том, как мистер Пламсон отправляется в долину кристаллов и естественно, опасностей.",
      link: "https://play.google.com/store/apps/details?id=com.Square360.ThePlumsonsStory",
      img: "Projects_images/Projects_1.png"
    }
  ];

  return (
    <section className="projects sm:pt-36 sm:pb-8 lg:pt-52 lg:pb-16" id="projects-section">
      <div className="container">
        {project.map((item) => {
          return <ProjectItem project={item} key={item.id}/>
        })}
      </div>
    </section>
  );
}

export default ProjectList;
