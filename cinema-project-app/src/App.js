

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Home from './pages';
import Coming from './pages/coming';
import About from './pages/about';
import Movies from './pages/movies';
import Book from './pages/book';
import Food from './pages/food';
import Ticket from './pages/ticket';
import Contact from './pages/contact';

  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/coming' component={Coming}/>
        <Route path='/about' component={About} />
        <Route path='/movies' component={Movies} />
        <Route path='/book' component={Book} />
        <Route path='/food' component={Food} />
        <Route path='/ticket' component={Ticket} />
        <Route path='/contact' component={Contact} />
      </Routes>
    </Router>
  );
}
  
export default App;