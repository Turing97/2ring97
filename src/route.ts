import Home from "./views/Home";
import About from "./views/About";
import PostLists from "./views/PostLists";
import Post from "./views/Post";
export const route = [
  {
    path: "/",
    name: "home",
    element: Home(),
  },
  {
    path: "/about",
    name: "about",
    element: About(),
  },
  {
    path: "/posts",
    name: "posts",
    element: PostLists(),
    children:[{
      path: "/posts/:slug",
      name: "post",
      element: Post(),
    }]
  }
];                                                                       