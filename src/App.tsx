import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { route } from './route';
import Post from './views/Post';






function App() {
  const {slug} = useParams()
  
useEffect(
  ()=>{
    console.log(slug)
  }
)
  return <Router>
    <div style={{ margin: 10 }}>
      <Link to="/" style={{ padding: 5 }}>
        Home
      </Link>
      <Link to="/about" style={{ padding: 5 }}>
        About
      </Link>
      <Link to="/posts" style={{ padding: 5 }}>
        Post
      </Link>
    </div>
    <Routes>
      <Route path=":slug" element={<Post />} />
      {route.map(({ path, element, children }, ind) => {
        if (children) {
          return (
            <Route path={path} element={element} key={ind}>
              {children.map(({ path, element }, index) => {
                return <Route path={path} element={element} key={index} />
              })}
            </Route>
          )
        } else {
          return <Route path={path} element={element} key={ind} />
        }
      })}
      {/* <Route path="posts" element={<Posts />}>
          <Route path="" element={<PostLists />} />
          <Route path=":slug" element={<Post />} />
        </Route> */}
    </Routes>

  </Router>
}



ReactDOM.render(<App />, document.getElementById('root'));


