import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav id="nav">
      <div className="nav-inner">
        <Link to="/" className={"nav-link"} data-id="home">
          Главная
        </Link>
        <Link to="/projects" className={"nav-link"} data-id="projects">
          Проекты
        </Link>
        <Link to="/about" className={"nav-link"} data-id="about">
          О нас
        </Link>
        <Link to="/contacts" className={"nav-link"} data-id="contacts">
          Контакты
        </Link>
        <Link to="/blog" className={"nav-link"} data-id="blog">
          Блог
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
