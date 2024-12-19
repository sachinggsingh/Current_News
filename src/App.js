// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  // apiKey = process.env.REACT_APP_NEWS_API;
  //Can also use the .env.local file to hide the api key
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route
              exact
              path="/"
             
              element={<News key="general" pageSize={5}   country="us" category="general" />}
            ></Route>
             <Route
              exact
              path="/home"
             
              element={<News key="general" pageSize={5}  country="us" category="general" />}
            ></Route>
            <Route
              exact
              path="/business"
              element={<News key="business" pageSize={5}  country="us" category="business" />}
            ></Route>
            <Route
              exact
              path="/entertainment"
              
              element={
                <News key="entertainment" pageSize={5}  country="us" category="entertainment" />
              }
            ></Route>
            <Route
              exact
              path="/health"
              
              element={<News key="health" pageSize={5} country="us" category="health" />}
            ></Route>
            <Route
              exact
              path="/science"
              
              element={<News key="science" pageSize={5}  country="us" category="science" />}
            ></Route>
            <Route
              exact
              path="/sports"
              
              element={<News key="sports" pageSize={5}  country="us" category="sports" />}
            ></Route>
            <Route
              exact
              path="/technology"
              
              element={
                <News key="technology" pageSize={5}  country="us" category="technology" />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
