//Have to import all components to app.js
import Navbar from './Navbar'
import Content from './Content'
import NewBlog from './NewBlog';
import Blog from './Blog';
import React from 'react'
//Install r-r-d and import it in order to link between pages
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NoPage from './NoPage';


function App() {

  return (
    //nest everything under the r-r-d
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            {/* Route holds the path to jump to the component in it */}
            <Route exact path='/'>
              <Content />
            </Route>
            <Route path='/newb'>
              <NewBlog />
            </Route>
            <Route path='/blog/:id'>
              <Blog />
            </Route>
            <Route path='*'>
              <NoPage />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>


  );
}

export default App;
