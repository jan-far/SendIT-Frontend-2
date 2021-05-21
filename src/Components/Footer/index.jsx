import React, { Component } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLogo,
  FooterLinksItems,
  FooterLinksWrapperContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialIconLink,
  SocialContentContainer,
  WebsiteRights,
  SocialIcons,
  SocialLogo,
} from './FooterElements';

const logo = './images/logo.jpg';

class Footer extends Component {
  render() {
    const toggleHome = () => {
      scroll.scrollToTop();
    };
    return (
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLogo to="/" onClick={toggleHome}>
              <img src={logo} width="100px" alt="logo" />
            </FooterLogo>
            <FooterLinksWrapperContainer>
              <FooterLinksWrapper>
                <FooterLinksItems>
                  <FooterLinkTitle>Contact Us</FooterLinkTitle>
                  <FooterLink href="#">Plot 111, Musa Aliro close, Maitama, Abuja.</FooterLink>
                  <FooterLink href="tel:(+234)818-716-1673" to="#">
                    (+234)818-716-1673
                  </FooterLink>
                  <FooterLink href="mailto:contact@SendIT.com">contact@SendIT.com</FooterLink>
                  <FooterLink href="mailto:reservation@SendIT.com">
                    reservation@SendIT.com
                  </FooterLink>
                </FooterLinksItems>
              </FooterLinksWrapper>
              <FooterLinksWrapper>
                <FooterLinksItems>
                  <FooterLinkTitle>About Us</FooterLinkTitle>
                  <FooterLink href="#">Join Us</FooterLink>
                  <FooterLink href="#">Testimonials</FooterLink>
                  <FooterLink href="#">Careers</FooterLink>
                  <FooterLink href="#">Investors</FooterLink>
                  <FooterLink href="#">Terms of services</FooterLink>
                </FooterLinksItems>
              </FooterLinksWrapper>
            </FooterLinksWrapperContainer>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                SendIT
              </SocialLogo>
              <SocialContentContainer>
                <WebsiteRights>
                  SendIT &copy; {new Date().getFullYear()} All rights reserved
                </WebsiteRights>
                <SocialIcons>
                  <SocialIconLink href="//" targer="_blank" aria-label="facebook">
                    <FaFacebook />
                  </SocialIconLink>
                  <SocialIconLink href="//" targer="_blank" aria-label="twitter">
                    <FaTwitter />
                  </SocialIconLink>
                  <SocialIconLink href="//" targer="_blank" aria-label="instagram">
                    <FaInstagram />
                  </SocialIconLink>
                  <SocialIconLink href="//" targer="_blank" aria-label="youtube">
                    <FaYoutube />
                  </SocialIconLink>
                  <SocialIconLink href="//" targer="_blank" aria-label="linkedin">
                    <FaLinkedin />
                  </SocialIconLink>
                </SocialIcons>
              </SocialContentContainer>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    );
  }
}

export default Footer;
