import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { createUseStyles } from 'react-jss'
import { generateLinks, generateRoutes } from './Route/Index';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  header: {
    flex: '0 0 48px'
  },
  content: {
    flex: 1
  }

})
function App() {
  const styles = useStyles()
  return <div className={styles.container}>
    <Router>
      <div className={styles.header}>
        {generateLinks()}
      </div>
      <div className={styles.content}>
        {generateRoutes()}
      </div>
    </Router>
  </div>

}





ReactDOM.render(<App />, document.getElementById('root'));


