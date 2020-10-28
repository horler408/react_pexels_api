import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
//import Home from './junks/HomeJunks'
import Nav from './components/NavBar'
import About from './pages/About'
import Services from './pages/Services'
import Contacts from './pages/Contacts'
import Details from './pages/Details'
import FourOFour from './components/FourOFour'

function App() {
  return (
    <div className="app_container">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/services'>
            <Services />
          </Route>
          <Route path='/contacts'>
            <Contacts />
          </Route>
          <Route path='/details'>
            <Details />
          </Route>
          <Route path="*">
            <FourOFour />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
