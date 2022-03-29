import React from "react";
import PostItem from "./PostItem";

function PostsList({ posts }) {
  return (
    <section>
      <div className="container">
        {posts.map((item) => (
          <PostItem post={item} key={item.id}/>
        ))}
      </div>
    </section>
  );
}

export default PostsList;
