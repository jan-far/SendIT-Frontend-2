import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import UserNav from '../../../Components/UserNav';
import withSpinner from '../../../Components/withSpinner';
import { toggleOpen } from '../../../Redux/dashboard/dashboardActions';
import { Container, Typography } from '@material-ui/core';
import { setEditParcel, setIsLoading, setUserParcel, setSelectedParcel } from '../../../Redux/parcel/parcelAction';
import { selectUserParcel, selectIsLoading } from '../../../Redux/parcel/parcelSelector';
import { DeleteParcel, GetParcels, Records } from './CreateParcelUtils';
import { ConnectedCustomForms, ConnectedEditParcel } from './Form';

const Empty = () => {
  return (
    <>
      <Typography variant="h5" align="center">
        NO PARCEL ORDER HAS BEEN MADE
      </Typography>
    </>
  );
};

const EmptyWithSpinner = withSpinner(Empty);
const GetParcelsWithSpinner = withSpinner(GetParcels);

const CreateParcel = ({
  userParcel,
  setUserParcel,
  setSelectedParcel,
  isLoading,
  setIsLoading,
  isOpen,
  toggleOpen,
  setEditParcel,
}) => {
  const handleEdit = (id) => {
    setEditParcel();
    const editParcel = userParcel.find((parcel) => parcel.id === id);
    setSelectedParcel(editParcel);
  };

  React.useEffect(() => {
    document.title = 'Create Parcel';
  }, []);

  return (
    <>
      <ConnectedEditParcel />
      <UserNav title="Parcel Order" first="Dashboard" toFirst="/dashboard" isOpen={isOpen} toggle={toggleOpen} />

      <Records data={userParcel} />
      <ConnectedCustomForms />
      <Container>
        {userParcel.length === 0 ? (
          <>
            <EmptyWithSpinner isLoading={isLoading} />
          </>
        ) : (
          <>
            <GetParcelsWithSpinner
              isLoading={isLoading}
              data={userParcel}
              edit={handleEdit}
              deleteParcel={(e) => DeleteParcel(e, userParcel, setIsLoading, setUserParcel)}
            />
          </>
        )}
      </Container>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  userParcel: selectUserParcel,
  isOpen: selectIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setIsLoading: (loading) => dispatch(setIsLoading(loading)),
  setUserParcel: (parcel) => dispatch(setUserParcel(parcel)),
  setEditParcel: () => dispatch(setEditParcel()),
  toggleOpen: () => dispatch(toggleOpen()),
  setSelectedParcel: (parcel) => dispatch(setSelectedParcel(parcel))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateParcel);
