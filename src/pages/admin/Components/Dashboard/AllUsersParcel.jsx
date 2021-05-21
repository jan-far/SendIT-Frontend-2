import React, { Component } from 'react';
import withSpinner from '../../../../Components/withSpinner';
import Parcels from './Parcels';
import { createStructuredSelector } from 'reselect';
import { selectFetchingUsersInfo } from '../../../../Redux/admin/adminSelector';
import { connect } from 'react-redux';

const ParcelWithSpinner = withSpinner(Parcels);

class AllUsersParcel extends Component {
  render() {
    const { fetchingUsersInfo, edit, confrimParcel } = this.props;
    return (
      <>
        <ParcelWithSpinner
          edit={edit}
          confrimParcel={confrimParcel}
          isLoading={fetchingUsersInfo}
        />
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  fetchingUsersInfo: selectFetchingUsersInfo,
});

export default connect(mapStateToProps)(AllUsersParcel);
