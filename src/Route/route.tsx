
import React from "react";
import About from "../views/About";
import Post from "../views/Post";
import PostLists from "../views/PostLists";
import Home from "../views/Home";

export const route = [
  {
    path: "/",
    name: "home",
    element: <Home/>,
  },
  {
    path: "/about",
    name: "about",
    element: <About/>,
  },
  {
    path: "/posts",
    name: "posts",
    element: <PostLists/>,
    children:[{
      path: ":slug",
      name: "post",
      element: <Post/>,
    }]
  }
];                                                                       