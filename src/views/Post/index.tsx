import React from "react";
import { useParams } from "react-router";



function Post() {
  const { slug } = useParams()
  console.log(slug)
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
  const post = BlogPosts[slug] || {title:'',description:'1231'};
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