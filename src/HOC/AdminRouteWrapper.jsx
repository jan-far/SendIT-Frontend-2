import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectAdminAuthenticated } from '../Redux/admin/adminSelector';

class AdminPass extends Component {
  render() {
    const { children, adminAuthenticated } = this.props;
    return (
      <Route
        render={({ location }) =>
          adminAuthenticated ? (
            <Redirect
              to={{
                pathname: '/admin/dashboard',
                state: { from: location },
              }}
            />
          ) : (
            children
          )
        }
      />
    );
  }
}

class AdminRoute extends Component {
  render() {
    const { children, adminAuthenticated, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={({ location }) =>
          adminAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/admin',
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  adminAuthenticated: selectAdminAuthenticated,
});

const RouteAdmin = connect(mapStateToProps)(AdminRoute),
  PassAdmin = connect(mapStateToProps)(AdminPass);

export { RouteAdmin, PassAdmin };
