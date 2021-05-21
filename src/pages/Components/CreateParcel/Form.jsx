import React, { Component } from 'react';
import { Cancel, Save } from '@material-ui/icons';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './style.css';
import LocationSearchInput from '../../../Components/GooglePlace';
import {
  FormModel,
  Form,
  FormContent,
  FormLabel,
  FormInput,
  CreateBtn,
  FormButton,
  Close,
  ParcelContainer,
  FabButtons,
  useStyles,
} from './CreateElements';
import { Error } from '../../../Services/FormHandler/validateInfo';
import { update_parcel, user_post } from '../../../Services/utils/fetch';
import { Dialog, DialogContent, DialogTitle, Fab, withStyles } from '@material-ui/core';
import NotificationToast from '../../../Components/Toast';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  setCreateParcel,
  setEditParcel,
  setIsLoading,
  setShowParcel,
} from '../../../Redux/parcel/parcelAction';
import {
  selectCreateParcel,
  selectEditParcel,
  selectParcelSelected,
  selectShowParcel,
  selectUserParcel,
} from '../../../Redux/parcel/parcelSelector';
import { compose } from 'redux';
import withUseFormHook from '../../../HOC/FormWrapper';

class CustomForms extends Component {
  render() {
    const {
      userParcel,
      setCreateParcel,
      createParcel,
      setIsLoading,
      Controller,
      values,
      reset,
      resetInput,
      errors,
      handleChange,
      handleSubmit,
      phone,
      control,
      setPhone,
      classes,
    } = this.props;
    const { destination, recipient, location, weight } = values;

    const validatePhone = (phone) => {
      const compare = phone
        ? isValidPhoneNumber(phone)
          ? undefined
          : 'Invalid phone number'
        : 'Phone number required';
      return phone && compare;
    };

    const submitForm = async (data) => {
      setIsLoading(true);
      setCreateParcel();
      try {
        const req = await user_post(data, '/parcels');
        const response = await req.json();

        if (response === undefined || req.status === 400) {
          NotificationToast.error(`${response.message}`);
        } else {
          NotificationToast.success(`${response.message}`);
          userParcel.unshift(response.Parcel);
          setIsLoading(false);

          reset();
          resetInput();
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    return (
      <>
        <ParcelContainer>
          <CreateBtn onClick={setCreateParcel}>Create Order</CreateBtn>
          <FormModel create={createParcel}>
            <FormContent>
              <Form action="#" onSubmit={handleSubmit(submitForm)}>
                <Close>
                  <Cancel
                    onClick={() => {
                      reset();
                      setCreateParcel();
                    }}
                    className={classes.cancel}
                  />
                </Close>
                <FormLabel htmlFor="for">Recipient</FormLabel>
                <Controller
                  name="recipient"
                  as={
                    <FormInput
                      type="recipient"
                      value={recipient}
                      placeholder="Enter Recipient Name"
                      onChange={handleChange}
                    />
                  }
                  rules={{ required: 'Recipient field is required' }}
                  control={control}
                  defaultValue=""
                />
                {Error(errors, 'recipient')}

                <FormLabel htmlFor="for">Destination</FormLabel>
                <Controller
                  name="destination"
                  as={
                    <LocationSearchInput
                      value={destination}
                      onChange={handleChange}
                      placeholder="Enter Destination"
                    />
                  }
                  rules={{ required: 'Destination field cannot be empty' }}
                  control={control}
                  defaultValue={destination}
                />
                {Error(errors, 'destination')}

                <FormLabel htmlFor="for">Weight (Kg)</FormLabel>
                <Controller
                  name="weight"
                  as={
                    <FormInput
                      type="number"
                      value={weight}
                      placeholder="Enter Weight"
                      onChange={handleChange}
                    />
                  }
                  rules={{
                    required: 'Destination field is required',
                    max: {
                      value: 300,
                      message: 'Weight capacity cannot exceed 300Kg',
                    },
                    min: {
                      value: 10,
                      message: 'Weight capacity must be above 10Kg',
                    },
                  }}
                  control={control}
                  defaultValue=""
                />
                {Error(errors, 'weight')}

                <FormLabel htmlFor="for">Phone Number</FormLabel>
                <Controller
                  name="phone"
                  as={
                    <PhoneInput
                      value={phone}
                      onChange={setPhone}
                      type="tel"
                      className="phone"
                      placeholder="Enter Your Phone Number"
                      defaultCountry="NG"
                      withCountryCallingCode
                    />
                  }
                  rules={{
                    required: 'Enter a valid phone number',
                    validate: { validatePhone },
                  }}
                  defaultValue=""
                  control={control}
                />
                {Error(errors, 'phone')}

                <FormLabel htmlFor="for">Location</FormLabel>
                <Controller
                  name="location"
                  as={
                    <LocationSearchInput
                      value={location}
                      onChange={handleChange}
                      placeholder="Enter Your Location"
                    />
                  }
                  rules={{ required: 'Location field cannot be empty' }}
                  control={control}
                  defaultValue=""
                />
                {Error(errors, 'location')}

                <FormButton type="submit">Create</FormButton>
              </Form>
            </FormContent>
          </FormModel>
        </ParcelContainer>
      </>
    );
  }
}

class EditParcel extends Component {
  render() {
    const {
      values,
      handleChange,
      handleSubmit,
      control,
      Controller,
      errors,
      selectedParcel,
      editParcel,
      setEditParcel,
      setIsLoading,
      userParcel,
      classes,
    } = this.props;
    const { destination } = values;
    const data = selectedParcel;

    const submitEdit = async (data) => {
      setIsLoading(true);
      const id = selectedParcel.id;
      const updateDest = { ...selectedParcel, destination: data.destination };

      const parcelToUpdate = userParcel.findIndex((row) => row.id === id);

      try {
        const req = await update_parcel(data, `/parcels/${id}/destination`);
        const response = await req.json();

        if (response === undefined || req.status === 400) {
          NotificationToast.error(`${response.message}`);
          setIsLoading(false);
        } else {
          NotificationToast.success(`${response.message}`);
          userParcel.splice(parcelToUpdate, 1, updateDest);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    return (
      <>
        <Dialog open={editParcel} onClose={setEditParcel}>
          <DialogTitle style={{ textAlign: 'center' }}>Edit Parcel</DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <Form action="#" onSubmit={handleSubmit(submitEdit)}>
              <FormLabel htmlFor="for">Recipient</FormLabel>
              <Controller
                name="recipient"
                as={<FormInput type="recipient" value={data ? data.recipient : ''} disabled />}
                defaultValue={data ? data.recipient : ''}
                control={control}
              />

              <FormLabel htmlFor="for">Destination</FormLabel>
              <Controller
                name="destination"
                as={
                  <LocationSearchInput
                    value={destination}
                    onChange={handleChange}
                    placeholder="Enter Destination"
                  />
                }
                rules={{ required: 'Destination field cannot be empty' }}
                control={control}
                defaultValue={data ? data.destination : ''}
              />
              {Error(errors, 'destination')}

              <FormLabel htmlFor="for">Weight (Kg)</FormLabel>
              <Controller
                name="weight"
                as={<FormInput type="number" value={data ? data.weight : ''} disabled />}
                defaultValue={data ? data.weight : ''}
                control={control}
              />

              <FormLabel htmlFor="for">Phone Number</FormLabel>
              <Controller
                name="phone"
                as={<FormInput type="text" value={data ? data.phone : ''} disabled />}
                defaultValue={data ? data.phone : ''}
                control={control}
              />

              <FormLabel htmlFor="for">Location</FormLabel>
              <Controller
                name="location"
                as={<FormInput type="text" value={data ? data.location : ''} disabled />}
                defaultValue={data ? data.location : ''}
                control={control}
              />

              <FabButtons>
                <Fab
                  className={classes.g1}
                  size="small"
                  onClick={() => setEditParcel()}
                  style={{ gridColumn: 1 }}
                >
                  <Cancel />
                </Fab>
                <Fab
                  className={classes.g2}
                  size="small"
                  type="submit"
                  onClick={() => setEditParcel()}
                >
                  <Save />
                </Fab>
              </FabButtons>
            </Form>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  userParcel: selectUserParcel,
  createParcel: selectCreateParcel,
  showParcel: selectShowParcel,
  editParcel: selectEditParcel,
  selectedParcel: selectParcelSelected,
});

const mapDispatchToProps = (dispatch) => ({
  setIsLoading: (loading) => dispatch(setIsLoading(loading)),
  setShowParcel: () => dispatch(setShowParcel()),
  setEditParcel: () => dispatch(setEditParcel()),
  setCreateParcel: () => dispatch(setCreateParcel()),
});

export const ConnectedCustomForms = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withUseFormHook,
  withStyles(useStyles)
)(CustomForms);

export const ConnectedEditParcel = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withUseFormHook,
  withStyles(useStyles)
)(EditParcel);
