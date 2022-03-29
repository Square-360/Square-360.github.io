import React from "react";
import Header from "../../UI/MyButton/Header/Header";
import { Link, useParams } from "react-router-dom";
import Posts from "../../../Posts.json";
import PostParagraph from "./PostParagraph";
import ScrollToTop from "../../ScrollToTop";
import NotFoundPage from "../404/NotFoundPage";

function PostPage({ elementId }) {
  const params = useParams();
  let info = Posts.filter((item) => item.id == params.id)[0];
  if (info == undefined){
    return(<NotFoundPage elementId="home" />)
  }
  let image = "url(http://localhost:3000/" + info.img + ")";

  return (
    <div className="main pb-[120px]">
      <ScrollToTop />
      <Header pageId={elementId} />
      <section
        style={{ backgroundImage: image }}
        className="relative z-10 h-[500px] w-full bg-no-repeat bg-cover bg-center"
      >
        <div className="bg-black opacity-[0.4] relative z-30 w-full h-full"></div>
        <div
          className="absolute z-50 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] 
        sm:pt-[50px] lg:pt-[80px] xl:pt-[115px]"
        >
          <h1 className="text-white sm:text-[36px] lg:text-[48px] xl:text-[52px] font-black text-center">
            {info.title}
          </h1>
          <hr className="bg-white w-[236px] sm:border-[1px] md:border-[1.5px] border-white m-auto my-[25px]" />
          <h3 className="text-center text-white sm:text-[18px] lg:text-[20px] text-[24px] font-bold">
            {info.date}
          </h3>
        </div>
      </section>

      <section className="sm:max-w-[90%] lg:max-w-[632px] mx-auto">
        {info.textData.map((item) =>
          item.length === 2 ? (
            <img src={item[1]} alt="" className="my-[65px]" key={item[0]} />
          ) : (
            <PostParagraph data={item} key={item[0]} />
          )
        )}
        <Link to="/blog">
          <button className="back">⬅ Назад</button>
        </Link>
      </section>
    </div>
  );
}

export default PostPage;
