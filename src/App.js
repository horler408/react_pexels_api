import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
//import Home from './junks/HomeJunks'
import Nav from './components/NavBar';
import Footer from './components/Footer';
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
          <Route exact path='/:id'>
            <Details />
          </Route>
          <Route path="*">
            <FourOFour />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
