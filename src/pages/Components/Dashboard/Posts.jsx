import React, { Component } from 'react';
import { Grid, Typography, Card, CardContent, CardActionArea } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import { selectUserParcel } from '../../../Redux/parcel/parcelSelector';
import { connect } from 'react-redux';

class Posts extends Component {
  render() {
    const { userParcel } = this.props;
    return (
      <div style={{ marginTop: 20, padding: 30 }}>
        <Grid container spacing={2} justify="center">
          {userParcel.map((post) => (
            <Grid item xs={9} sm={5} md={6} key={post.id}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Recipient: {post.recipient.toUpperCase()}
                    </Typography>
                    <Typography component="p">Destination: {post.destination}</Typography>
                    <Typography component="p">Weight: {post.weight}</Typography>
                    <Typography component="p">Location: {post.location}</Typography>
                    <Typography component="p">Phone No.: {post.phone}</Typography>
                    <Typography component="p">Price: ${post.weight * 2}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  userParcel: selectUserParcel,
});

export default connect(mapStateToProps)(Posts);
