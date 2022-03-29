import React from "react";

function PostParagraph({ data }) {
  let title = data[1];
  let paragraph = data[2];
  return (
    <div className="sm:mt-[40px] lg:mt-[64px]">
      <h1 className="text-primary sm:text-[20px] md:text-[24px] font-black mb-[25px]">{title}</h1>
      <p className="text-[18px]">{paragraph}</p>
    </div>
  );
}

export default PostParagraph;
