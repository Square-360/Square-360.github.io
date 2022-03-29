import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import "../Header/HeaderStyle.css";

function Header({ pageId }) {
  let links = document.getElementsByClassName("nav-link");
  let headerEl = document.getElementsByTagName("header");

  // Обработчик события на click для кнопки.
  // Завёрнуто в обработчик события для document для того чтобы проверить на полную загрузку страницы

  function checkNavToggle() {
    let navToggle = document.getElementById("nav-toggle");
    let navBar = document.getElementById("nav");

    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active");
      navBar.classList.toggle("active");
    });
  }

  // Проверяем ссылки. Проходимся по каждой ссылке в хэдере и если её data-id равен pageId - активируем ссылку

  function setLinkClass() {
    [...links].forEach((item) => {
      if (item.getAttribute("data-id") === pageId) item.classList.add("active");
    });
  }

  // Провереяем хэдер на наличие id = "home"

  function checkPage() {
    if (pageId !== "home") return "white";
    else return "dark";
  }

  // Проверяем прокурутку страницы. Если больше или равен хэдеру и - активируем хэдер

  function listenScrollEvent() {
    window.scrollY >= headerEl[0].offsetHeight
      ? headerEl[0].classList.add("active")
      : headerEl[0].classList.remove("active");
  }

  // Делаем каждый раз когда обновляется header

  useEffect(() => {
    setLinkClass();
    checkNavToggle();
    listenScrollEvent();
    window.addEventListener("scroll", listenScrollEvent);
    document.addEventListener("DOMContentLoaded", checkNavToggle);
  }, []);

  return (
    <header className={checkPage()} id="header">
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <Link to="/">
            <div className="header-logo"></div>
          </Link>
          {/* Nav */}
          <Nav />
          {/* Burder menu */}
          <div id="nav-toggle" className="nav-toggle">
            <span className="nav-toggle-item">Menu</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
