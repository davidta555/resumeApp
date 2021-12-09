import React, { Component } from "react";
import Directory from "./directoryComponent";
import Login from "./loginComponent";
import { USERS } from "../shared/users";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: USERS,
    };
  }

  render() {
    return <Directory users={this.state.users} />;
  }
}

export default Main;
