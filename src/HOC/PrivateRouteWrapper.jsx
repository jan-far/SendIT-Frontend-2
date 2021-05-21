import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectAuthenticated } from '../Redux/user/userSelector';

class PrivateRoute extends Component {
  render() {
    const { children, isAuthenticated, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={({ location }) =>{
          return isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/signin',
                state: { from: location },
              }}
            />
          )
        }
        }
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
