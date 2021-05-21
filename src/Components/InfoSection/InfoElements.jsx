import styled, { css } from 'styled-components';

const darkMode = css`
  color: #f7f8fa;
  background: ${({ lightBg }) => (lightBg ? '#101d3f' : '#101522')};
`;

const lightMode = css`
  color: #010606;
  background: ${({ lightBg }) => (lightBg ? '#wheat' : '#cccccc')};
`;

const modeColor = ({ theme }) => {
  return theme.mode === 'light' ? lightMode : darkMode;
};

export const InfoContainer = styled.div`
  ${modeColor}

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }

  @media screen and (max-width: 480px) {
    padding: 60px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 0 14px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 0;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;

  @media screen and (max-width: 480px) {
    margin-bottom: 0;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;

  @media screen and (max-width: 480px) {
    margin-bottom: 0;
  }
`;

export const TextWrapper = styled.div`
  max-width: 650px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 480px) {
    padding-bottom: 10px;
  }
`;

export const TopLine = styled.p`
  color: ${({theme}) => theme.mode === 'dark' ? '#01bf71' : '#045734'};
  font-size: 18px;
  line-height: 16px;
  font-weight: 800;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px;
  padding-right: 0;
`;
