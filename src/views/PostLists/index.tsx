import React from "react";
import { Link, Outlet } from "react-router-dom";
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container:{
    display:'flex',
    height: '100%',

  },
  meuns: {
    width: '190px',
    height: '100%',
    background: 'rgb(255, 255, 255)',
    borderRadius: '0.4em',
    boxShadow: '0.3em 0.3em 0.7em #00000015',
    transition: 'border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    border: 'rgb(250, 250, 250) 0.2em solid'
  }
})


function PostLists() {
  const styles = useStyles()
  const BlogPosts = {
    "1": {
      title: "第一篇博客文章",
      description: "第一篇博客文章，是关于Vue3.0的"
    },
    "2": {
      title: "第二篇博客文章",
      description: "Hello React Router v6"
    }
  };
  return (
    <div className={styles.container}>
      <ul className={styles.meuns}>
        {Object.entries(BlogPosts).map(([slug, { title }]) => (
          <li key={slug}>
            <Link to={`/posts/${slug}`}>
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <Outlet />
      </div>
    </div>


  );
}

export default PostLists;