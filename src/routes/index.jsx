import { Component } from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../components/home";

class RoutesX extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
}

export default RoutesX;
