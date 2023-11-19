// import logo from './logo.svg';
import './App.css';
// import Footer from './Components/Footer/footer';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import React from 'react';
// import Footer from './Components/Footer/footer';

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const Services = () => <div>Services Page</div>;
const Contact = () => <div>Contact Page</div>;

function App() {
  return (
    <Router>
      <div id="root">
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
