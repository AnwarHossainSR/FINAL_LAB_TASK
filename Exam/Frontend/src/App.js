import React,{ useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './component/Home'
import AddDairy from "./component/AddDairy";
import UpdateDairy from "./component/UpdateDairy";

const App = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/adddairy" component={AddDairy} />
        <Route path="/update/:id"><UpdateDairy id={props.id}/></Route>
      </Switch>
    </div>
  );
};

export default App;
