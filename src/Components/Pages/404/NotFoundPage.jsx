import React from "react";
import { Link } from "react-router-dom";
import Header from "../../UI/MyButton/Header/Header";

function NotFoundPage() {
  return (
    <div className="">
      <Header pageId={""} />
      <div className="max-w-[1230px] mx-auto sm:py-[160px] lg:py-[320px]">
        <h1 className="page-title">Извините, <br /> но страница не найдена :(</h1>
        <h3 className="sm:text-[18px] lg:text-[24px] text-center my-[38px]">
          Похоже, что-то пошло не так, либо данной страницы уже не
          существует. <br />
          Но не отчаивайтесь, ведь можно вернуться на главную страницу!
        </h3>
        <div className="w-max mx-auto">
          <Link to="/">
            <button className="back er">⬅ Вернуться на главную</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
