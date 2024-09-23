import styled from "styled-components";

export const Container = styled.header`
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
`

export const Logo = styled.h1`
 color: ${({ theme }) => theme.COLORS.GRAY_100};
 font-size: 24px;
 font-weight: 400;
 line-height: 110%;

 span{
  font-weight: 800;
 }
`


export const Score = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 12px;
 padding: 12px 20px;
 border-radius: 8px;
 border: 1px solid ${({ theme }) => theme.COLORS.GREEN_LIGHT};

 background-color: ${({ theme }) => theme.COLORS.GRAY_400};

 > span
 {
  font-size: 20px;
  font-weight: bold;
  line-height: 110%;
  color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
 }
`

