import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';

export const SearchTitle = styled(TextField)`
  width: 400px;
  background-color: white;
`;

export const Filter = styled.div`
  margin-top: 20px;
  display: flex;
  width: 400px;
  justify-content: space-between;
  align-items: center;
`;

export const Reset = styled(Button)`
  background-color: antiquewhite;
  height: 75px;
  width: 60px;
`;

export const FilterSelect = styled(Select)`
  background-color: white;
`;