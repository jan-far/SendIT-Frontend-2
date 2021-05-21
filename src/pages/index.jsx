import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Loading from '../Components/LoadingPage';
import NotificationToast from '../Components/Toast';
import { RouteAdmin, PassAdmin } from '../HOC/AdminRouteWrapper';
import PrivateRoute from '../HOC/PrivateRouteWrapper';
import { setAdminIfExist } from '../Redux/admin/adminAction';
import { setIsLoading, setUserParcel } from '../Redux/parcel/parcelAction';
import { fetchCurrentUserAsync } from '../Redux/user/userAction';

const LoadComponents = (name) => {
  return lazy(() => import(`./Components/${name}`));
};

const AdminLoadComponents = (name) => {
  return lazy(() => import(`./admin/Components/${name}`));
};

const Homepage = LoadComponents('HomePage');
const SignInPage = LoadComponents('Signin');
const SignUpPage = LoadComponents('Signup');
const Dashboard = LoadComponents('Dashboard');
const CreateParcel = LoadComponents('CreateParcel');
const Error404 = LoadComponents('Error404');

const AdminAuth = AdminLoadComponents('SignIn');
const AdminDashboard = AdminLoadComponents('Dashboard');

class Pages extends Component {
  fetchCurrentUser = this.props.fetchCurrentUser;
  fetchAdmin = this.props.fetchAdmin;

  componentDidMount() {
    this.fetchAdmin();
    this.fetchCurrentUser()
      .then((response) => {
        if (response.message) {
          NotificationToast.error(response.message);
        }
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Suspense fallback={<Loading />}>
              <Homepage />
            </Suspense>
          </Route>

          <Route exact path="/signin">
            <Suspense fallback={<Loading />}>
              <SignInPage />
            </Suspense>
          </Route>

          <Route exact path="/signup">
            <Suspense fallback={<Loading />}>
              <SignUpPage />
            </Suspense>
          </Route>

          <Route exact path="/dashboard">
            <PrivateRoute>
              <Suspense fallback={<Loading />}>
                <Dashboard />
              </Suspense>
            </PrivateRoute>
          </Route>

          <Route exact path="/create">
            <PrivateRoute>
              <Suspense fallback={<Loading />}>
                <CreateParcel />
              </Suspense>
            </PrivateRoute>
          </Route>

          <Route exact path="/admin">
            <Suspense fallback={<Loading />}>
              <PassAdmin>
                <AdminAuth />
              </PassAdmin>
            </Suspense>
          </Route>

          <Route path="/admin/dashboard">
            <Suspense fallback={<Loading />}>
              <RouteAdmin>
                <AdminDashboard />
              </RouteAdmin>
            </Suspense>
          </Route>

          <Route path="*">
            <Suspense fallback={<Loading />}>
              <Error404 />
            </Suspense>
          </Route>
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchAdmin: () => dispatch(setAdminIfExist()),
  fetchCurrentUser: () => dispatch(fetchCurrentUserAsync()),
  userParcel: (parcel) => dispatch(setUserParcel(parcel)),
  setLoading: (loading) => dispatch(setIsLoading(loading)),
});

export default compose(connect(null, mapDispatchToProps), withRouter)(Pages);
