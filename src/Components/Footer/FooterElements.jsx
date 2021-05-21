import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const gradient = `linear-gradient(#39598A, #2a3f44)`;

const darkMode = css`
  color: aliceblue;
  background: ${({ theme }) => theme.gradient};
`;

const lightMode = css`
  color: black;
  background: ${gradient};
`;

const modeColor = ({ theme }) => {
  return theme.mode === 'light' ? lightMode : darkMode;
};

export const FooterContainer = styled.footer`
  ${modeColor}
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1680px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
export const FooterLogo = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FooterLinksWrapperContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-self: center;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: ${({ theme }) => (theme.mode === 'light' ? theme.text : '#01bf71')};
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin-top: 30px;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SocialContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 0 10px;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
`;

export const WebsiteRights = styled.small`
  margin-top: 16px;
  margin-bottom: 10px;
  color: #fff;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
