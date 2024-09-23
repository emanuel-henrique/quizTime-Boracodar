import styled from "styled-components";

export const Container = styled.button`
 display: grid;
 place-content: center;

 width: 45px;
 height: 45px;

 background-color: ${({theme}) => theme.COLORS.GRAY_300};
 color: ${({theme}) => theme.COLORS.GRAY_200};

 border: none;
 border-radius: 50%;

 > svg
 {
  width: 20px;
  height: 20px;
  stroke-width: 4px;
 }
`