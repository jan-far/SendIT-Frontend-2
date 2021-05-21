import { Component } from 'react';
import { Typography, Container } from '@material-ui/core';
import { connect } from 'react-redux';
import Posts from './Posts';
import { selectUserParcel } from '../../../Redux/parcel/parcelSelector';
import { createStructuredSelector } from 'reselect';

class PostContainer extends Component {

  render() {
    const { userParcel } = this.props;

    return (
      <Container>
        {userParcel === undefined ? (
          ''
        ) : userParcel.length === 0 ? (
          <Typography variant="h5" align="center" style={{ marginTop: 25, color: 'wheat' }}>
            NO PARCEL ORDER HAS BEEN MADE
          </Typography>
        ) : (
          <Posts data={userParcel} />
        )}
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  userParcel: selectUserParcel,
});

export default connect(mapStateToProps)(PostContainer);
