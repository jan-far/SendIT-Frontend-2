import React, { Component } from 'react';
import withSpinner from '../../../../Components/withSpinner';
import { AdminContainer, Column1, Column2 } from './DashboardElement';
import UpdateParcel from './form';
import { update_parcel } from '../../../../Services/utils/fetch';
import NotificationToast from '../../../../Components/Toast';
import AllUsersParcel from './AllUsersParcel';
import ParcelChart from './ParcelChart';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  selectAllUserParcel,
  selectEditParcel,
  selectFetchingUsersInfo,
  selectIsOpen,
  selectSelectedParcel,
} from '../../../../Redux/admin/adminSelector';
import {
  fetchUsersDataAsync,
  fetchUsersParcelAsync,
  setEditParcel,
  setIsLoading,
  setSelectedParcel,
  toggleOpen,
} from '../../../../Redux/admin/adminAction';
import { compose } from 'redux';
import { withTheme } from 'styled-components';
import AdminNav from '../../../../Components/UserNav/AdminNav';

class AdminDashboard extends Component {
  componentDidMount() {
    this.props.fetchUsersParcel();
    this.props.fetchUsersData();
  }

  componentWillUnmount() {
    this.props.fetchUsersParcel();
    this.props.fetchUsersData();
  }

  render() {
    const {
      userParcel,
      fetchingUsersInfo,
      setLoading,
      editing,
      setEditing,
      isOpen,
      toggleOpen,
      selectedParcel,
      setSelectedParcel,
      theme,
    } = this.props;

    const handleEdit = (id) => {
      setEditing();
      const edituserParcel = userParcel.find((parcel) => parcel.id === id);
      return setSelectedParcel({ ...edituserParcel });
    };

    const submitEdit = async (data) => {
      setLoading(true);
      const id = selectedParcel.id;
      const update = { ...selectedParcel, ...data };
      const parcelToUpdate = userParcel.findIndex((row) => row.id === id);

      if (data.status !== selectedParcel.status || data.location !== selectedParcel.location) {
        if (data.status !== selectedParcel.status) {
          try {
            const req = await update_parcel(data, `/parcels/${id}/status`);
            const response = await req.json();

            if (response === undefined || req.status !== 200) {
              NotificationToast.error(`${response.message}`);
              setLoading(false);
            } else {
              NotificationToast.success(`${response.message}`);
              userParcel.splice(parcelToUpdate, 1, update);
              setLoading(false);
            }
          } catch (error) {
            console.log(error);
          }
        }

        if (data.location !== selectedParcel.location) {
          try {
            const req = await update_parcel(data, `/parcels/${id}/presentLocation`);
            const response = await req.json();

            if (response === undefined || req.status !== 200) {
              NotificationToast.error(`${response.message}`);
              setLoading(false);
            } else {
              NotificationToast.success(`${response.message}`);
              userParcel.splice(parcelToUpdate, 1, update);
              setLoading(false);
            }
          } catch (error) {
            console.log(error);
          }
        }
      } else {
        NotificationToast.success(`:smile`);
        setLoading(false);
      }
    };

    const confrimParcel = async (id) => {
      setLoading(true);
      const parcelToConfirm = userParcel.find((row) => row.id === id);
      const data = { ...parcelToConfirm, status: 'delivered' };

      const ask = window.confirm('Are you sure parcel has been delivered?');

      if (ask) {
        try {
          const req = await update_parcel(data, `/parcels/${id}/status`);
          const response = await req.json();

          if (response === undefined || req.status !== 200) {
            NotificationToast.error(`${response.message}`);
            setLoading(false);
          } else {
            NotificationToast.success(`${response.message}`);
            userParcel.splice(parcelToConfirm, 1, data);
            setLoading(false);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setLoading(false);
      }
    };
    const ParcelChartWithSpinner = withSpinner(ParcelChart);

    console.log(AdminNav)
    return (
      <>
        <AdminNav title="Admin Portal" isOpen={isOpen} toggle={toggleOpen} />
        <UpdateParcel
          editing={editing}
          closeEdit={setEditing}
          submitEdit={submitEdit}
        />
        <AdminContainer>
          <Column1 mode={theme.mode}>
            {/* <Typography varient="caption">Total Order: {Row.length}</Typography> */}
            <ParcelChartWithSpinner isLoading={fetchingUsersInfo} />
          </Column1>
          <Column2>
            <AllUsersParcel edit={handleEdit} confrimParcel={confrimParcel} />
          </Column2>
        </AdminContainer>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  userParcel: selectAllUserParcel,
  fetchingUsersInfo: selectFetchingUsersInfo,
  selectedParcel: selectSelectedParcel,
  editing: selectEditParcel,
  isOpen: selectIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleOpen: () => dispatch(toggleOpen()),
  setLoading: (loading) => dispatch(setIsLoading(loading)),
  setSelectedParcel: (parcel) => dispatch(setSelectedParcel(parcel)),
  setEditing: () => dispatch(setEditParcel()),
  fetchUsersParcel: () => dispatch(fetchUsersParcelAsync()),
  fetchUsersData: () => dispatch(fetchUsersDataAsync()),
});

export default compose(connect(mapStateToProps, mapDispatchToProps), withTheme)(AdminDashboard);
