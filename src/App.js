import React from 'react';
import './App.css';
// import MyComponent from './components/Writing'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home'


function App() {
  return (
      <Router>
        <div>
        <Route path="/" component={Home} />
      {/* <MyComponent/> */}
      </div>
      </Router>
  );
}

export default App;
