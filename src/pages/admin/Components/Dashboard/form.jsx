import React, { Component } from 'react';
import { Cancel, Save } from '@material-ui/icons';
import LocationSearchInput from '../../../../Components/GooglePlace';
import { Form, FormLabel, FormInput, FabButtons, useStyles } from './DashboardElement';
import { Error } from '../../../../Services/FormHandler/validateInfo';
import { withTheme } from 'styled-components';
import { Dialog, DialogContent, DialogTitle, Fab, Select, withStyles } from '@material-ui/core';
import { compose } from 'redux';
import withUseFormHook from '../../../../HOC/FormWrapper';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSelectedParcel } from '../../../../Redux/admin/adminSelector';

class UpdateParcel extends Component {
  render() {
    const {
      values,
      handleChange,
      handleSubmit,
      control,
      Controller,
      errors,
      classes,
      editing,
      closeEdit,
      submitEdit,
      selectedParcel,
    } = this.props;
    const { location } = values;
    const data = selectedParcel

    return (
      <>
        <Dialog open={editing} onClose={closeEdit}>
          <DialogTitle style={{ textAlign: 'center' }}>Edit Parcel</DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <Form action="#" onSubmit={handleSubmit(submitEdit)}>
              <FormLabel htmlFor="for">Recipient</FormLabel>
              <FormInput
                name="recipient"
                type="recipient"
                value={data ? data.recipient : ''}
                disabled
              />

              <FormLabel htmlFor="for">Destination</FormLabel>
              <FormInput
                name="recipient"
                type="recipient"
                value={data ? data.destination : ''}
                disabled
              />
              {Error(errors, 'destination')}

              <FormLabel htmlFor="for">Weight (Kg)</FormLabel>
              <FormInput name="weight" type="number" value={data ? data.weight : ''} disabled />

              <FormLabel htmlFor="for">Phone Number</FormLabel>
              <FormInput name="phone" type="text" value={data ? data.phone : ''} disabled />

              <FormLabel htmlFor="for">Location</FormLabel>
              <Controller
                name="location"
                as={
                  <LocationSearchInput
                    value={location}
                    onChange={handleChange}
                    placeholder="Current Parcel Location"
                  />
                }
                rules={{ required: 'Location field cannot be empty' }}
                control={control}
                defaultValue={data ? data.destination : ''}
              />

              <FormLabel htmlFor="for">Status</FormLabel>
              <Controller
                name="status"
                as={
                  <Select
                    native
                    variant="outlined"
                    inputProps={{
                      name: 'status',
                      id: 'status',
                    }}
                    style={{ backgroundColor: 'whitesmoke', color: 'black' }}
                  >
                    <option value="processing">Processing</option>
                    <option value="pending">Pending</option>
                  </Select>
                }
                control={control}
                defaultValue={data ? data.status : ''}
              />

              <FabButtons>
                <Fab className={classes.g1} size="small" onClick={() => closeEdit()}>
                  <Cancel />
                </Fab>
                <Fab className={classes.g2} size="small" type="submit" onClick={() => closeEdit()}>
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
  selectedParcel: selectSelectedParcel
})

export default compose(connect(mapStateToProps), withTheme, withStyles(useStyles), withUseFormHook)(UpdateParcel);
