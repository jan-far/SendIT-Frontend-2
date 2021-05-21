import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';
import { RouteButton } from '../../../Components/ButtonElements';
import { ImgContainer, Container, ErrorContainer, useStyles } from './ErrorElements';
const logo = './images/mad-designer.png';

class Error_404 extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <ErrorContainer>
          <Container>
            <ImgContainer src={logo} alt="error image" />
            <Typography className={classes.text} component="h1" align="center">
              404 PAGE NOT FOUND
            </Typography>
          </Container>
          <RouteButton to="/" primary="true" dark="true">
            HOMEPAGE
          </RouteButton>
        </ErrorContainer>
      </>
    );
  }
}

export default withStyles(useStyles)(Error_404);
