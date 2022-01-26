import styled from 'styled-components';
import Card from '@mui/material/Card';

export const Characters = styled.div`
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 900px;
  margin-top: 20px;
`;

export const CardCharacter = styled(Card)`
  margin-top: 20px;
`;