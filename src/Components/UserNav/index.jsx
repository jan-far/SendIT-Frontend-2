import React, { Component } from 'react';
import { Avatar, Zoom } from '@material-ui/core';
import { Person, PowerSettingsNew } from '@material-ui/icons';
import { FaBars } from 'react-icons/fa';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { logout, toggleLogout, toggleOpenMenu } from '../../Redux/user/userAction';
import { selectCurrentUser, selectOpenMenu, selectLogout } from '../../Redux/user/userSelector';
import {
  NavHeader,
  Menu,
  Title,
  MenuItem,
  MenuLink,
  User,
  Icon,
  UserDetails,
  Info,
  MobileIcon,
  SidebarMenu,
  SidebarContainer,
  SidebarWrapper,
  SidebarLink,
  SideUser,
  CloseIcon,
  Logout,
} from './UserNavElements';

class UserNav extends Component {
  render() {
    const {
      title,
      first,
      toFirst,
      second,
      toSecond,
      third,
      toThird,
      forth,
      toForth,
      currentUser,
      toggleOpenMenu,
      openMenu,
      userLogout,
      toggleLogout,
      logout,
    } = this.props;
    return (
      <>
        <NavHeader>
          <Title>{title}</Title>
          <MobileIcon onClick={toggleOpenMenu}>
            <FaBars />
          </MobileIcon>
          <SidebarContainer isOpen={openMenu} onClick={toggleOpenMenu}>
            <Icon>
              <CloseIcon onClick={() => toggleOpenMenu} />
            </Icon>
            <SidebarWrapper>
              <SidebarMenu>
                <SidebarLink show="true" to="/" onClick={() => toggleOpenMenu}>
                  Home
                </SidebarLink>
                <SidebarLink
                  show={toFirst}
                  to={toFirst ? toFirst : ''}
                  onClick={() => toggleOpenMenu}
                >
                  {first}
                </SidebarLink>
                <SidebarLink
                  show={toSecond}
                  to={toSecond ? toSecond : ''}
                  onClick={() => toggleOpenMenu}
                >
                  {second}
                </SidebarLink>
                <SidebarLink
                  show={toThird}
                  to={toThird ? toThird : ''}
                  onClick={() => toggleOpenMenu}
                >
                  {third}
                </SidebarLink>
                <SidebarLink
                  show={toForth}
                  to={toForth ? toForth : ''}
                  onClick={() => toggleOpenMenu}
                >
                  {forth}
                </SidebarLink>
              </SidebarMenu>
              <SideUser onClick={() => userLogout()} to="/">
                {currentUser ? (
                  <>
                    <Zoom in={true}>
                      <Avatar alt="user logo" style={{ color: 'green' }}>
                        {currentUser.firstname === undefined ? 'A' : `${currentUser.firstname}`[0]}
                      </Avatar>
                    </Zoom>
                    <UserDetails logout="true">
                      <PowerSettingsNew /> Logout
                    </UserDetails>
                  </>
                ) : (
                  <>
                    <Person />
                  </>
                )}
              </SideUser>
            </SidebarWrapper>
          </SidebarContainer>

          <Info>
            <Menu>
              <MenuItem>
                <MenuLink show="true" to="/">
                  Home
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink show={toFirst} to={toFirst ? toFirst : ''}>
                  {first}
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink show={toSecond} to={toSecond ? toSecond : ''}>
                  {second}
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink show={toThird} to={toThird ? toThird : ''}>
                  {third}
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink show={toForth} to={toForth ? toForth : ''}>
                  {forth}
                </MenuLink>
              </MenuItem>
            </Menu>
            <User onClick={() => toggleLogout()}>
              {currentUser ? (
                <>
                  <Zoom in={true}>
                    <Avatar alt="user logo" style={{ color: 'green' }}>
                      {currentUser.firstname === undefined ? 'A' : `${currentUser.firstname}`[0]}
                    </Avatar>
                  </Zoom>
                  <UserDetails>
                    {currentUser.firstname === undefined ? 'Admin' : currentUser.firstname}
                  </UserDetails>
                  <Logout
                    show={logout ? logout.toString() : undefined}
                    to="/"
                    onClick={() => userLogout()}
                  >
                    <PowerSettingsNew /> &nbsp; Logout
                  </Logout>
                </>
              ) : (
                <>
                  <Person />
                </>
              )}
            </User>
          </Info>
        </NavHeader>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  openMenu: selectOpenMenu,
  logout: selectLogout,
});

const mapDispatchToProps = (dispatch) => ({
  toggleOpenMenu: () => dispatch(toggleOpenMenu()),
  toggleLogout: () => dispatch(toggleLogout()),
  userLogout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNav);
