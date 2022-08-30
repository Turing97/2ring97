import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { route } from './route';



function App() {
  
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
   
    </Routes>

  </Router>
}





ReactDOM.render(<App />, document.getElementById('root'));


