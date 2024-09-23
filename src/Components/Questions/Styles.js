import styled from "styled-components";

export const Container = styled.div`
 color: ${({theme}) => theme.COLORS.GRAY_100};

 > span
 {
  font-size: 12px;
  font-weight: bold;
  line-height: 110%;
  letter-spacing: 3.6px;
 }

 > span:first-child
 {
  font-size: 20px;
  letter-spacing: initial;
  margin-right: 4px;
 }
`