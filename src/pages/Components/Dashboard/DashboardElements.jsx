import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;

export const Field = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  color: black;
  justify-items: start;
  width: 100%;
  padding: 10px 0;

  @media screen and (max-width: 428px) {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
  }
`;

export const Hr = styled.hr`
  color: wheat;
`;

export const UserTable = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center center;
  place-items: center center !important;

  @media screen and (max-width: 520px) {
    display: block;
    width: 100%;
  }
`;

export const useStyles = {
  dialog: {
    textAlign: 'center',
    background: 'wheat',
  },
  g1: {
    gridColumn: 1,
  },
  g2: {
    gridColumn: 2,
  },
};
