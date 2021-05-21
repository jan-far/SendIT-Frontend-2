import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.div`
  background: ${({ scrollNav, theme }) => (scrollNav ? theme.gradient : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  display: flex;
  justify-self: flex-start;
  align-items: center;
  width: 70px;
  cursor: pointer;
`;

export const NavLogoImg = styled.img`
  width: 100%;
  align-self: center;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.1fr;
`;

export const NavMenu = styled.ul`
  display: ${({ loading }) => (loading ? 'none' : 'block')};
  grid-column: 1;
  grid-auto-flow: row;
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: ${({ theme }) => `5px solid  ${theme.mode === 'light' ? 'green' : '#01bf71'}`};
  }
`;

export const SignUp = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  grid-column: 2;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const User = styled.div`
  display: flex;
  position: relative;
  place-items: center center;
  background: transparent;
  padding: 10px;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const UserDetails = styled.span`
  font-size: large;
  font-weight: bold;
  text-align: center;
  margin-left: 5px;
  margin-right: 15px;
  color: ${({ theme, scrolled }) =>
    theme.mode === 'light' ? (scrolled ? 'black' : 'wheat') : 'aliceblue'};

  &::before {
    content: '|';
    margin: 10px;
    color: lightgreen;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    place-items: center center;
    color: ${({ logout }) => (logout ? 'red' : 'wheat')};

    &::before {
      color: #000;
      place-self: center center;
    }
  }
`;
