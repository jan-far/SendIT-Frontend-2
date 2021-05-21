import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'

export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;

:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right:0;
  bottom: 0;
  background: 
  linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, .4) 100%
  ),
  linear-gradient(
    180deg,
    rgba(0, 0, 0, .8) 0%, transparent
    100%);
  z-index: 2;
}
`

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`

export const HeroContent = styled.div`
z-index: 3;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;

@media screen and (max-width: 480px) {
  padding: 8px;
  top: 25vh;
  margin: 0 auto;
}
`

export const HeroH1 = styled.h1`
font-size: 4.5vw;
letter-spacing: 2px;
margin-bottom: 25px;
font-family: 'PT Serif', serif;
font-weight: 700;
color: #fff;
text-align: center;

@media screen and (min-width: 1480px) {
  font-size: 3vw
}

@media screen and (max-width: 768px) {
  font-size: 40px
}

@media screen and (max-width: 480px) {
  font-size: 32px;
}
`

export const HeroH2 = styled.h2`
font-family: 'Raleway', sans-serif;
font-size: 600;
width: 100%;
text-align: center;
padding: 0px 0 20px 0;
position: relative;
color: #fff;
text-align: center;

@media screen and (max-width: 768px) {
  font-size: 32px
}

@media screen and (max-width: 480px) {
  font-size: 26px;
}
`

export const HeroHr = styled.hr`
width: 10%;
margin: 0.3em auto 0 auto;
height: 5px;
background-color: #eb392e;
border-radius: 1em;
border: none;
align-self: center;
`

export const HeroP = styled.p`
margin-top: 24px;
color: #fff;
font-size: 24px;
align-content: center;
max-width: 600px;
text-align: center;

@media screen and (max-width: 768px) {
  font-size: 24px;
}

@media screen and (max-width: 480px) {
  font-size: 18px;
}
`

export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`