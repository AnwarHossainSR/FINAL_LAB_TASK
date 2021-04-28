import React,{ useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './component/Header'
import Home from './component/Home'
import axios from 'axios'
import AddDairy from "./component/AddDairy";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/adddairy" component={AddDairy} />
      </Switch>
    </div>
  );
};

export default App;
