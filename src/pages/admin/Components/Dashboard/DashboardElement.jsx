import styled, { css, keyframes } from 'styled-components';

const neumorphic = css`
  -webkit-box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
  box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
  background: linear-gradient(-45deg, rgba(0, 0, 0, 0.22), rgba(255, 255, 255, 0.01));

  @media screen and (max-width: 480px) {
    -webkit-box-shadow: -3px 3px 6px #b8b9be, 3px -3px 6px #a6aed1;
    box-shadow: -3px 3px 6px #b8b9be, 3px -3px 6px #a6aed1;
  }
`;

const ProfileInfoNeumorphic = css`
  -webkit-box-shadow: 3px 3px 10px #d3d8ec, -3px -3px 6px #a6aed1;
  box-shadow: 3px 3px 10px #d3d8ec, -3px -3px 6px #a6aed1;
  background: linear-gradient(-45deg, rgba(0, 0, 0, 0.22), rgba(255, 255, 255, 0.25));
`;

const DetailsNeumorphic = css`
  -webkit-box-shadow: 3px 3px 5px #353f63, -3px -3px 6px #a6aed1;
  box-shadow: 3px 3px 5px #353f63, -3px -3px 6px #a6aed1;
  background: linear-gradient(-90deg, rgba(225, 225, 225, 0), rgba(0, 0, 0, 0.1)),
    linear-gradient(-45deg, rgba(0, 0, 0, 0), rgba(225, 225, 225, 0.01));

  @media screen and (max-width: 480px) {
    -webkit-box-shadow: -3px 3px 10px #353f63, 3px -3px 6px #fff;
    box-shadow: -3px 3px 10px #353f63, 3px -3px 6px #fff;
    background: linear-gradient(-180deg, rgba(0, 0, 0, 0.2), rgba(225, 225, 225, 0.7)),
      linear-gradient(-360deg, rgba(0, 0, 0, 0.6), rgba(225, 225, 225, 1));
  }
`;

const button_loading = keyframes`
from{
  transform: rotate(0turn);
}
to{
  transform: rotate(1turn);
}`;

export const AdminContainer = styled.div`
  display: grid;
  /* grid-auto-columns: minmax(auto, 1fr); */
  grid-template-columns: repeat(autofit, minmax(0.4fr, 1fr));
  overflow: hidden;
  grid-template-areas: 'col1 col2 col2 col2';
  ${neumorphic}

  @media screen and (min-width: 968px) {
    grid-template-areas: "'col1' 'col2 col2'";
  }

  @media screen and (max-width: 800px) {
    grid-template-areas: 'col1 col1' 'col2 col2';
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  width: 100%;
  background-color: ${({ mode }) => (mode === 'light' ? 'whitesmoke' : 'black')};
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  ${ProfileInfoNeumorphic}
`;

export const Details = styled.div`
  border-radius: 20px;
  margin: 10px auto;
  ${DetailsNeumorphic}
`;

export const FormContent = styled.div`
  padding: 35px;
  position: relative;
  margin: 25px auto;
  border-radius: 4px;

  @media screen and (min-width: 968px) {
    width: 80%;
  }

  @media screen and (min-width: 768px) {
    width: 72%;
  }

  @media screen and (max-width: 480px) {
    padding: 10px;
    margin: 10px 15px;
  }
`;

export const Form = styled.form`
  display: grid;
  position: relative;
  background: repeating-linear-gradient(
    to bottom,
    rgba(81, 12, 129, 0.2),
    rgba(14, 2, 54, 0.7) 100%
  );
  max-width: 500px;
  z-index: 1;
  margin: 10px auto;
  padding: 60px 32px;
  border-radius: 4px;
  box-shadow: 0 10px 13px rgba(190, 190, 190, 0.9);

  @media screen and (max-width: 480px) {
    padding: 25px 32px;
    margin-top: 35px;
    height: 100%;
  } ;
`;

export const Title = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
  color: white;

  @media screen and (max-width: 480px) {
    margin-bottom: 5px;
  }
`;

export const FormInput = styled.input`
  border-radius: 5px;
  padding: 16px;
  border: none;
  margin-bottom: 32px;
`;

export const Close = styled.span`
  float: right;
  position: relative;
  font-size: 25px;
  z-index: 3;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 968px) {
    left: -100px;
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;

export const FormButton = styled.button`
  position: relative;
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
  margin: 0 auto;
  width: 80%;

  &:hover {
    color: white;
    background-color: #01bf61;
    transform: scale(105%);
  }
`;

export const Spinner = styled.div`
  padding: 13px 0;

  &::after {
    content: '';
    z-index: 2;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 4px solid transparent;
    border-top-color: white;
    border-radius: 50%;
    animation: ${button_loading} 1s ease infinite;
  }
`;

export const FabButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 5px 15px;
  margin-top: 10px;
`;

export const useStyles = (theme) => {
  return {
    dialogContent: {
      display: 'grid',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4e088f',
    },
    g1: {
      gridColumn: 1,
    },
    g2: {
      gridColumn: 2,
      justifySelf: 'end',
    },
    card: {
      display: 'grid',
      gridTemplateRows: '.9fr .2fr',
      minHeight: '20rem',
      border: '1px solid #0093',
    },
    typoUser: {
      marginTop: '20px',
      padding: '5px',
      textAlign: 'center',
      [theme.breakpoints.down('480')]: {
        padding: '10px',
        fontSize: '1.2rem',
        marginTop: '22px',
      },
    },
  };
};
