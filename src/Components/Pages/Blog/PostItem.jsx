import React from "react";
import { Link } from "react-router-dom";
import {useState} from "react";
import { useEffect } from "react";

function PostItem({ post }) {
  const [textp, setTextp] = useState("")

  useEffect(() => {
    window.innerWidth < 420
    ?setTextp("")
    :setTextp(post.body)
  }, [window])

  return (
    <Link to={"/blog/" + post.id}>
      <div className="max-w-[865px] mx-auto rounded-[50px] sm:mt-[50px] lg:mt-[100px] relative cursor-pointer">
        <div className="relative top-0 left-0 z-50 bg-[#5928e580] hover:bg-[#5a28e5c9] transition-all duration-300 
        sm:pt-[40px] sm:pb-[52px] sm:px-[20px]
        lg:pt-[80px] lg:pb-[105px] lg:px-[40px] rounded-[50px]">
          <h1 className="font-black text-white sm:text-[36px] lg:text-[48px]">{post.title}</h1>
          <span className="font-bold text-white text-[18px] mt-[20px]" id="primary-text">
            {textp}
          </span>
          <hr className="my-[18px] w-[180px] border-white" />
          <h3 className="sm:text-[20px] lg:text-[24px] text-white font-[regular]">{post.date}</h3>
        </div>
        <img
          src={post.img}
          className="w-full h-full absolute top-0 left-0 z-10 rounded-[50px]"
          alt=""
        />
      </div>
    </Link>
  );
}

export default PostItem;
