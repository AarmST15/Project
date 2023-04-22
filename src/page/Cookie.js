import React, { Component } from 'react';
import {ReactSession} from 'react-client-session';

export default class Cookie extends Component {
    constructor() {
    super(); 
    this.state = {
      username: "",
      sessionUsername: ""
    }
    this.setUsername = this.setUsername.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clear = this.clear.bind(this);

    ReactSession.setStoreType("cookie");
  }

  setUsername(e) {
    e.preventDefault();
    ReactSession.set("username", this.state.username);

    this.setState({
      sessionUsername: "User Name is: " + ReactSession.get("username")
    });
  }

  clear(e) {
    e.preventDefault();
    ReactSession.remove("username");

    this.setState({
      sessionUsername: "User Name is: " + ReactSession.get("username"),
      message: "Cookie cleared!"
    });
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  }
  }