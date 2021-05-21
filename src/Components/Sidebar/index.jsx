import React, { Component } from 'react';
import { Avatar, Zoom } from '@material-ui/core';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withTheme } from 'styled-components';
import { toggleOpenMenu } from '../../Redux/user/userAction';
import { selectCurrentUser, selectOpenMenu } from '../../Redux/user/userSelector';
import { RouteButton } from '../ButtonElements';
import { User, UserDetails } from '../UserNav/UserNavElements';
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SideBtnWrap,
  SidebarLink,
  SidebarRoute,
  SidebarSignup,
} from './SidebarElements';

class Sidebar extends Component {
  render() {
    const { currentUser, openMenu, toggleOpenMenu, theme } = this.props
    const dark = theme.mode === 'light' ? `dark='true'` : `dark='false`;
    const primary = theme.mode === 'light' ? `primary='true'` : '';
    const changeColor = theme.mode === 'light' ? { dark, primary } : '';

    return (
      <SidebarContainer isOpen={openMenu} onClick={toggleOpenMenu}>
        <Icon>
          <CloseIcon onClick={() => toggleOpenMenu} />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="/" onClick={toggleOpenMenu}>
              Home
            </SidebarLink>
            <SidebarLink to="about" onClick={toggleOpenMenu}>
              About
            </SidebarLink>
            <SidebarLink to="service" onClick={toggleOpenMenu}>
              Services
            </SidebarLink>
            {currentUser ? (
              <div
                style={{
                  width: '50%',
                  alignSelf: 'center',
                  justifySelf: 'center',
                }}
              >
                <RouteButton to="/dashboard" {...changeColor}>
                  Dashboard
                </RouteButton>
              </div>
            ) : (
              <SidebarSignup to="/signup" onClick={toggleOpenMenu}>
                Sign Up
              </SidebarSignup>
            )}
          </SidebarMenu>
          <SideBtnWrap>
            {currentUser ? (
              <User>
                <>
                  <Zoom in={true}>
                    <Avatar alt="user logo" style={{ color: 'green' }}>
                      {`${currentUser.firstname}`[0]}
                    </Avatar>
                  </Zoom>
                  <UserDetails>{currentUser.firstname}</UserDetails>
                </>
              </User>
            ) : (
              <SidebarRoute to="/signin">Sign In</SidebarRoute>
            )}
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  openMenu: selectOpenMenu,
});

const mapDispatchToProps = (dispatch) => ({
  toggleOpenMenu: () => dispatch(toggleOpenMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Sidebar));
