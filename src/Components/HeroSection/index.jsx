import React, { Component } from 'react';
import { RouteButton } from '../ButtonElements';
import video from '../../video/video.mp4';
import {
  HeroContainer,
  HeroContent,
  HeroBg,
  VideoBg,
  HeroH1,
  HeroH2,
  HeroHr,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectHover } from '../../Redux/user/userSelector';
import { toggleHover } from '../../Redux/user/userAction';

class HeroSection extends Component {
  render() {
    const { hover, setHover } = this.props;

    const onHover = () => {
      setHover();
    };

    return (
      <>
        <HeroContainer id="/">
          <HeroBg>
            <VideoBg autoPlay loop muted src={video} type="video/mp4"></VideoBg>
          </HeroBg>
          <HeroContent imgStart={true}>
            <HeroH2>
              Welcome To SendIT
              <HeroHr></HeroHr>
            </HeroH2>
            <HeroH1>Enjoy Swift delivery</HeroH1>
            <HeroP>Send and Receive your goods, without stress!</HeroP>
            <HeroBtnWrapper>
              <RouteButton
                to="/signup"
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary="true"
                dark="true"
              >
                Join Us {hover ? <ArrowForward /> : <ArrowRight />}
              </RouteButton>
            </HeroBtnWrapper>
          </HeroContent>
        </HeroContainer>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  hover: selectHover,
});

const mapDispatchToProps = (dispatch) => ({
  setHover: () => dispatch(toggleHover()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroSection);
