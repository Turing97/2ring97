import React from "react";
import { useParams } from "react-router-dom";



function Post() {
  const {slug} = useParams()
  const BlogPosts = {
    "1": {
      title: "react",
      description: "react"
    },
    "2": {
      title: "vue",
      description: "vue"
    },

  };
  const { title, description } = BlogPosts[slug as keyof typeof BlogPosts];
  return (
    <div style={{ padding: 20 }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div></div>
    </div>
  );
}
export default Post;