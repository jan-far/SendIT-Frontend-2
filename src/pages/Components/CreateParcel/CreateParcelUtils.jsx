import React, { Component } from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  FormLabel,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';
import NotificationToast from '../../../Components/Toast';
import { delete_parcel } from '../../../Services/utils/fetch';
import { Delete, Edit } from '@material-ui/icons';
import { useStyles } from './CreateElements';

class GetParcel extends Component {
  render() {
    const { data, edit, deleteParcel, classes } = this.props;
    return (
      <>
        <Grid container spacing={3} justify="center">
          {data.map((parcel) => (
            <Grid item xs={9} sm={5} md={6} key={parcel.id}>
              <Card className={classes.card}>
                <CardActionArea style={{ gridRow: 1 }}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Recipient: {parcel.recipient.toUpperCase()}
                    </Typography>
                    <Typography component="p">
                      <FormLabel>Destination: </FormLabel>
                      {parcel.destination}
                    </Typography>
                    <Typography component="p">
                      <FormLabel>Weight: </FormLabel>
                      {parcel.weight}
                    </Typography>
                    <Typography component="p">
                      <FormLabel>Location:</FormLabel> {parcel.location}
                    </Typography>
                    <Typography component="p">
                      <FormLabel>Phone No.: </FormLabel>
                      {parcel.phone}
                    </Typography>
                    <Typography component="p">
                      <FormLabel>Price:</FormLabel> ${parcel.weight * 2}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions
                  style={{
                    gridRow: 2,
                    background:
                      'linear-gradient(to right bottom, #0095, #0035), linear-gradient(to left top, #0099, #3001)',
                  }}
                >
                  <Button
                    size="small"
                    color="inherit"
                    onClick={(e) => edit(parcel.id)}
                    disabled={parcel.status === 'delivered' ? true : false}
                  >
                    <Edit />
                  </Button>
                  <Button size="small" color="secondary" onClick={(e) => deleteParcel(parcel.id)}>
                    <Delete />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}
export const GetParcels = withStyles(useStyles)(GetParcel);

export const DeleteParcel = async (id, Row, setLoading, setUserParcel) => {
  const parcelToDeleteId = Row.findIndex((row) => row.id === id);
  const ask = window.confirm('Are you sure you want to delete this parcel?');

  if (ask) {
    setLoading(true);

    if (Row.length === 1) {
      setUserParcel([]);
      setLoading(false);
    }

    try {
      const req = await delete_parcel(`/parcels/${id}/cancel`);
      const response = await req.json();

      if (response === undefined || req.status === 400) {
        NotificationToast.error(`${response.message}`);
        setLoading(false);
      } else {
        NotificationToast.success(`${response.message}`);
        Row.splice(parcelToDeleteId, 1);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    setLoading(false);
  }
};

export class Records extends Component {
  render() {
    const { data } = this.props;
    let pending = 0;
    let delivered = 0;

    for (let i = 0; i < data.length; i++) {
      if (data[i].status !== 'delivered') {
        pending += 1;
      } else {
        delivered += 1;
      }
    }

    return (
      <>
        <Typography variant="caption">Total Orders: {data.length}</Typography>| &nbsp;
        <Typography variant="caption">Total Pending: {pending}</Typography>| &nbsp;
        <Typography variant="caption">Total Delivered: {delivered}</Typography>
      </>
    );
  }
}
