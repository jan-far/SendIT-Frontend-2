import React from 'react'
import { Avatar, Zoom } from '@material-ui/core';
import { RouteButton } from '../ButtonElements';
import { NavBtn, NavItem, NavBtnLink, SignUp, User, UserDetails } from './NavbarElements';

const UserInfo = ({ user, scrolled }) => {
  return (
    <>
      <Zoom in={true}>
        <Avatar alt="user logo" style={{ color: 'green' }}>
          {`${user.firstname}`[0]}
        </Avatar>
      </Zoom>
      <UserDetails scrolled={scrolled} >{user.firstname}</UserDetails>
    </>
  );
};

export const DashboardOrSignUp = ({ currentUser }) => {
  return (
    <>
      {currentUser ? (
        <RouteButton to="/dashboard">Dashboard</RouteButton>
      ) : (
        <NavItem>
          <SignUp to="/signup">Sign Up</SignUp>
        </NavItem>
      )}
    </>
  );
};

export const UserIconOrSignIn = ({ currentUser, scrolled }) => {
  return (
    <>
      {currentUser ? (
        <User>
          <UserInfo scrolled={scrolled} user={currentUser} />
        </User>
      ) : (
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      )}
    </>
  );
};
