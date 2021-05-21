import React, { Component } from 'react';
import { Avatar, Zoom } from '@material-ui/core';
import { Person, PowerSettingsNew } from '@material-ui/icons';
import { FaBars } from 'react-icons/fa';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleLogout, toggleOpenMenu } from '../../Redux/user/userAction';
import { selectOpenMenu, selectLogout } from '../../Redux/user/userSelector';
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
import { selectCurrentAdmin } from '../../Redux/admin/adminSelector';
import { adminLogout } from '../../Redux/admin/adminAction';

class AdminNav extends Component {
  render() {
    const {
      title,
      first,
      toFirst,
      currentAdmin,
      toggleOpenMenu,
      openMenu,
      adminLogout,
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
              </SidebarMenu>
              <SideUser onClick={() => adminLogout()} to="/">
                {currentAdmin ? (
                  <>
                    <Zoom in={true}>
                      <Avatar alt="user logo" style={{ color: 'green' }}>
                        {currentAdmin.firstname === undefined
                          ? 'A'
                          : `${currentAdmin.firstname}`[0]}
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
            </Menu>
            <User onClick={() => toggleLogout()}>
              {currentAdmin ? (
                <>
                  <Zoom in={true}>
                    <Avatar alt="user logo" style={{ color: 'green' }}>
                      {currentAdmin.firstname === undefined ? 'A' : `${currentAdmin.firstname}`[0]}
                    </Avatar>
                  </Zoom>
                  <UserDetails>
                    {currentAdmin.firstname === undefined ? 'Admin' : currentAdmin.firstname}
                  </UserDetails>
                  <Logout
                    show={logout ? logout.toString() : undefined}
                    to="/"
                    onClick={() => adminLogout()}
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
  currentAdmin: selectCurrentAdmin,
  openMenu: selectOpenMenu,
  logout: selectLogout,
});

const mapDispatchToProps = (dispatch) => ({
  toggleOpenMenu: () => dispatch(toggleOpenMenu()),
  toggleLogout: () => dispatch(toggleLogout()),
  adminLogout: () => dispatch(adminLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminNav);
