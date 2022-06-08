import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
        <h1>Meu portifólio</h1>
        <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/contact"> Contact </Link>
        </div>
      </header>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
    </div>
  );
}

export default App;
