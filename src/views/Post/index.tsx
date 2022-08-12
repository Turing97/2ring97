import React from "react";



function Post() {
  const BlogPosts = {
    "1": {
      title: "react",
      description: "react"
    },
    "2": {
      title: "vue",
      description: "vue"
    }
  };
  
  const post = BlogPosts[1];
  const { title, description } = post;
  return (
    <div style={{ padding: 20 }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div></div>
    </div>
  );
}
export default Post;



``43]