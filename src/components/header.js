//@flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

type Props = {
  authenticated: boolean,
  authenticate: (state: boolean) => boolean
}
type State = {
  authenticated: boolean
}

class Header extends React.Component<Props, State> {
  authButton(): React.Node {
    if (this.props.authenticated) {
      return <button onClick={() => this.props.authenticate(false)}> SignOut </button>
    }
    return <button onClick={() => this.props.authenticate(true)}>Sign In</button>
  }

  render(): React.Node {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = (state: State) => (
  {
    authenticated: state.authenticated
  }
)

export default connect(mapStateToProps, actions)(Header);
