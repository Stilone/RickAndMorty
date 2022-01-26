import styled, {createGlobalStyle} from 'styled-components';
import image from './image/cropped-1920-1080-1056599.jpg';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-image: url('${image}');
  background-repeat: no-repeat;
  background-attachment: fixed;
`;