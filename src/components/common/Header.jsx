import React, { Component } from 'react';
import { notify } from 'react-notify-toast';
import { Link, Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import PropTypes from 'prop-types';
import '../../assets/stylesheets/header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      expired: false,
    };
  }

  logout = () => {
    this.setState({ token: null });
    localStorage.clear();
  };

  checkToken = () => {
    const { token } = this.state;
    if (token) {
      const data = jwt.decode(token);
      if (!data) {
        localStorage.clear();
        this.setState({ expired: true, token: null });
      }

      const currentTime = new Date().getTime() / 1000;
      if (currentTime > data.exp) {
        localStorage.clear();
        this.setState({ expired: true, token: null });
      }
    }
  };

  componentDidMount = () => {
    const { token } = localStorage;
    if (!token) {
      this.setState({ token: null });
    } else {
      this.setState({ token, expired: false });
    }
  };

  componentDidUpdate = () => {
    this.checkToken();
    if (!window.navigator.onLine) {
      notify.show(
        'Hmm...seems like you are not connected to the internet',
        'error',
        -1
      );
    } else {
      this.checkToken();
    }
  };

  render() {
    const { token, expired } = this.state;
    const { logout } = this.props;

    return (
      <header>
        {expired && <Redirect to="/login" />}
        <nav>
          <div className="logo">
            <Link to="/">Politico</Link>
          </div>

          {token ? (
            <div className="nav-content">
              <div className="nav-item logout">
                <Link to="/" onClick={logout}>
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            <div className="nav-content">
              <div className="nav-item hdr-vote">
                <Link to="/#howToV">Vote</Link>
              </div>
              <div className="nav-item hdr-join">
                <Link to="/#bcm-candidate">Candidate</Link>
              </div>
              <div className="nav-item signin">
                <Link to="/login">Sign In</Link>
              </div>
              <div className="nav-item signup">
                <Link to="/signup">Sign Up</Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Header;
