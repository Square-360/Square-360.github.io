import React from "react";
import { Link } from "react-router-dom";

function FooterColTwo() {
  return (
    <div className="footer-col">
      {/* Title */}
      <h1 className="text-white text-3xl font-black">Основные ссылки:</h1>
      {/* Content (list) */}
      <ul>
        <li className="mt-5">
          <Link to="/" className="text-white text-xl font-black">
            Главная
          </Link>
        </li>
        <li className="mt-5">
          <Link to="/projects" className="text-white text-xl font-black">
            Проекты
          </Link>
        </li>
        <li className="mt-5">
          <Link to="/about" className="text-white text-xl font-black">
            О нас
          </Link>
        </li>
        <li className="mt-5">
          <Link to="/contacts" className="text-white text-xl font-black">
            Контакты
          </Link>
        </li>
        <li className="mt-5">
          <Link to="/blog" className="text-white text-xl font-black">
            Блог
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default FooterColTwo;
