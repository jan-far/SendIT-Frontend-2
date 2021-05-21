import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../../Redux/user/userSelector';
import { Field, Hr, useStyles } from './DashboardElements';
import { Dialog, DialogContent, DialogTitle, Typography, withStyles } from '@material-ui/core';
import { compose } from 'redux';
import { toggleShowProfile } from '../../../Redux/dashboard/dashboardActions';
import { selectShowProfile } from '../../../Redux/dashboard/dashboardSelectors';

class ProfileData extends Component {
  render() {
    const { showProfile, toggleShowProfile, currentUser, classes } = this.props;
    const fullname = `${currentUser.firstname}  ${currentUser.lastname}`;
    return (
      <>
        <Dialog open={showProfile} onClose={toggleShowProfile}>
          <DialogTitle className={classes.dialog}>My Profile</DialogTitle>
          <DialogContent>
            <Field>
              <Typography className={classes.g1}>Full Name: </Typography>
              <Typography className={classes.g2}>{fullname}</Typography>
            </Field>
            <Hr />
            <Field>
              <Typography className={classes.g1}>Email: </Typography>
              <Typography className={classes.g2}>{currentUser.email}</Typography>
            </Field>
            <Hr />
            <Field>
              <Typography className={classes.g1}>Phone: </Typography>
              <Typography className={classes.g2}>{currentUser.phone}</Typography>
            </Field>
            <Hr />
            <Field>
              <Typography className={classes.g1}>Location: </Typography>
              <Typography className={classes.g2}>{currentUser.location}</Typography>
            </Field>
            <Hr />
          </DialogContent>
        </Dialog>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  showProfile: selectShowProfile,
});

const mapDispatchToProps = (dispatch) => ({
  toggleShowProfile: () => dispatch(toggleShowProfile()),
});

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(useStyles))(ProfileData);
