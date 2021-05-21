import styled, {css} from 'styled-components';

const darkMode = css`
color: aliceblue;
background: #010606;
`

const lightMode = css`
color: black;
background: whitesmoke;
`

const modeColor = ({theme}) => {
  return theme.mode === "light" ? lightMode : darkMode;
}

export const ServicesContainer = styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
${modeColor}

@media screen and (max-width: 768px) {
  height: 1200px;
}

@media screen and (max-width: 480px) {
height: 1300px;
}
`

export const ServicesWrapper = styled.div`
max-width: 1680px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px) {
  grid-template-columns: repeat(2, minmax(.5fr, 1fr));
}

@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
  padding: 0 20px;
}
`

export const ServicesCard = styled.div`
background: ${({theme}) => theme.mode === 'dark' ? 'darkgreen' : 'green'};
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px 5px;
box-shadow: 0px 1px 50px rgba(60, 80, 74, 0.9);
transition: all 0.2s ease-in-out;

&:hover {
  transform: scale(1.02);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

@media screen and (min-width: 1000px) {
  height: 300px!important;
}
`

export const ServicesIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
font-size: 2.5rem;
margin-bottom: 64px;
${modeColor}

@media screen and (max-width: 480px) {
  font-size: 2rem;
}
`

export const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
color: whitesmoke;
`

export const ServicesP =styled.p`
font-size: 1.1rem;
text-align: center;
color: aliceblue;
`