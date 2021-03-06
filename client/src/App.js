
import './App.css';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Fragment } from 'react';
import Home from './components/pages/Home'
import About from './components/pages/About'
import ContactState from './context/contact/ContactState';

function App() {
  return (
    <ContactState>
        <Router>
        <Fragment>
            <Navbar/>
            <div className="container">
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/about" component={About}/>
              </Switch>
            </div>
        </Fragment>
      </Router>
    </ContactState>
    
    
  );
}

export default App;
