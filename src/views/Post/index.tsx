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
    },
    undefined:{
      title: "vue",
      description: "vue"
    }
  };
  const { title, description } = BlogPosts['1'];
  return (
    <div style={{ padding: 20 }}>
      <div>1232</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div></div>
    </div>
  );
}
export default Post;