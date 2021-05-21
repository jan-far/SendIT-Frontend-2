import React, { Component } from 'react';
import { DashboardContainer } from './DashboardElements';
import { Button, RouteButton } from '../../../Components/ButtonElements';
import { toggleShowProfile } from '../../../Redux/dashboard/dashboardActions';
import { connect } from 'react-redux';
import { selectIsLoading  } from '../../../Redux/parcel/parcelSelector';
import { createStructuredSelector } from 'reselect';
import UserNav from '../../../Components/UserNav';
import withSpinner from '../../../Components/withSpinner';
import ProfileData from './ProfileData';
import { selectUserLoaded } from '../../../Redux/user/userSelector';
import { fetchUserParcelAsync } from '../../../Redux/parcel/parcelAction';
import PostContainer from './PostContainer';

const PostsContainerWithSpinner = withSpinner(PostContainer);
const ProfileDataWithSpinner = withSpinner(ProfileData);

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchUserParcel();
    document.title = 'Dashboard';
  }

  render() {
    const { toggleShowProfile, isLoading, userLoaded } = this.props;

    return (
      <>
        <UserNav title="Dashboard" first="Create Parcel" toFirst="/create" />
        <DashboardContainer>
          <Button to="/" primary="true" dark="true" onClick={toggleShowProfile}>
            My Profile
          </Button>
          <ProfileDataWithSpinner
            stay
            isLoading={userLoaded}
          />

          <PostsContainerWithSpinner isLoading={isLoading} />

          <RouteButton primary="true" dark="true" to="/create">
            Send New Parcel
          </RouteButton>
        </DashboardContainer>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  userLoaded: selectUserLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  toggleShowProfile: () => dispatch(toggleShowProfile()),
 fetchUserParcel: () => dispatch(fetchUserParcelAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
