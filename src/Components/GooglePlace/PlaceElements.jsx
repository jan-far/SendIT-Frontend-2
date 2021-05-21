import styled from "styled-components";

export const PlaceContainer = styled.div`
  color: gold;
  font-weight: 100px;
  margin-bottom: 32px;
`;

export const PlaceInput = styled.input`
  border-radius: 5px;
  padding: 16px;
  border: none;
  width: 100%;
`;

export const PlaceSearchContainer = styled.div`
  position: absolute;
  background-color: #010190;
  overflow-y: auto;
  max-height: 150px;
  max-width: 60%;
  z-index: 3;
`;

export const Float = styled.div`
  position: sticky;
  padding: 0 10px;
`;
