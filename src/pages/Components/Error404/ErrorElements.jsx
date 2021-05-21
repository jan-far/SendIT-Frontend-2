import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgContainer = styled.img`
  width: 65%;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const useStyles = (theme) => ({
  text: {
    fontSize: theme.typography.h3.fontSize,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
});

