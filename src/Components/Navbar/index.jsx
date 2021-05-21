import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa';
import withSpinner from '../withSpinner';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser, selectFetchingUser, selectScroll } from '../../Redux/user/userSelector';
import { setScrollNav, toggleOpenMenu } from '../../Redux/user/userAction';
import { UserIconOrSignIn, DashboardOrSignUp } from './ComponentsUtil';
import {
  Nav,
  NavLinks,
  NavLogo,
  NavLogoImg,
  NavMenu,
  NavItem,
  NavbarContainer,
  MobileIcon,
  NavDetails,
} from './NavbarElements';

const logo = './images/logo.jpg';
const UserIconOrSignInWithSpinner = withSpinner(UserIconOrSignIn);

class Navbar extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.changeNav);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.changeNav);
  }

  changeNav = () => {
    if (window.scrollY >= 80) {
      this.props.setScrollNav(true);
    } else {
      this.props.setScrollNav(false);
    }
  };

  render() {
    const { currentUser, fetchingUser, toggleOpenMenu, scrollNav } = this.props;

    return (
      <>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/">
              <NavLogoImg src={logo} alt="SendIT" width="100px" />
            </NavLogo>
            <MobileIcon onClick={toggleOpenMenu}>
              <FaBars />
            </MobileIcon>
            <NavDetails>
              <NavMenu loading={fetchingUser}>
                <NavItem>
                  <NavLinks
                    to="/"
                    smooth={true}
                    duration={700}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    Home
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="about"
                    smooth={true}
                    duration={700}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    About
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="service"
                    smooth={true}
                    duration={700}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    Services
                  </NavLinks>
                </NavItem>
                <DashboardOrSignUp currentUser={currentUser} />
              </NavMenu>
              <UserIconOrSignInWithSpinner
                isLoading={fetchingUser}
                fetchingUser={fetchingUser}
                currentUser={currentUser}
                scrolled={scrollNav}
                stay
              />
            </NavDetails>
          </NavbarContainer>
        </Nav>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  fetchingUser: selectFetchingUser,
  scrollNav: selectScroll,
});

const mapDispatchToProps = (dispatch) => ({
  toggleOpenMenu: () => dispatch(toggleOpenMenu()),
  setScrollNav: (scroll) => dispatch(setScrollNav(scroll)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
