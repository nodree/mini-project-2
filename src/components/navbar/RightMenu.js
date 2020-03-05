import React, { Component } from "react";
import Modal from "react-responsive-modal";
import axios from "axios";
import { Link } from "react-router-dom";
const baseUrl = "http://notflixtv.herokuapp.com/api/v1";

class SignIn extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isLogin: true
    };
  }

  login = async e => {
    e.preventDefault();
    const LOGIN_ENDPOINT = `${baseUrl}/users/login`;
    console.log(this.state);
    try {
      let response = await axios.post(LOGIN_ENDPOINT, this.state);
      console.log(response.data.data.token);
      if (response.status === 200 && response.data.data.token) {
        let token = response.data.data.token;

        localStorage.setItem("access_token", token);
        this.props.history.push("/TaskDaskboard");
      }
    } catch (err) {
      console.log(err);
    }
  };

  handleInput = e => {
    const key = e.target.name;
    this.setState({
      [key]: e.target.value
    });
  };
  submit() {}

  render() {
    const { open } = this.state;
    return (
      <div className="RightMenu">
        <div className="RightMenu__SignIn">
          <button onClick={this.onOpenModal}>Sign In</button>
          <Modal open={open} onClose={this.onCloseModal}>
            <div className="Modal">
              <h1>Login</h1>
              <form onSubmit={this.login}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleInput}
                  value={this.state.email}
                />
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleInput}
                  value={this.state.password}
                />
                <br />
                <Link to="/">
                  <button onClick={this.onCloseModal}>SIGN IN</button>
                  <button onClick={this.onCloseModal}>SIGN UP</button>
                </Link>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}
export default SignIn;
