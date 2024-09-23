import styled from "styled-components";

export const Container = styled.div`
 background-color: ${({ theme }) => theme.COLORS.GRAY_500};
 color: ${({ theme }) => theme.COLORS.GRAY_100};

 width: 250px;
 height: 300px;

 display: grid;
 place-content: center;
 position: relative;
 
 padding: 46px 32px;

 border-radius: 8px;
 border: 3.194px solid;
 border-color: ${({ theme, status }) =>
 status === 'correct' ? theme.COLORS.GREEN_LIGHT :
 status === 'error' ? theme.COLORS.RED_LIGHT :
 theme.COLORS.GRAY_300};
 border-bottom-width: 6.387px;

 transition: background-color 150ms;
 
 &:hover
 {
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
 }

 > img
 {
  margin: 0 auto 24px;
 }

 > span
 {
  text-align: center; 
  line-height: 110%;
 }

 &:hover > div:first-child
 {
  outline-color: ${({ theme }) => theme.COLORS.GRAY_200};
 }
`

export const RadioInput = styled.div`
 width: 24px;
 height: 24px;
 border-radius: 50%;
 position: absolute;
 top: 14px;
 right: 14px;
 display: grid;
 place-content: center;

 background-color: ${({status, theme}) => 
 status === 'correct' ? theme.COLORS.GREEN_LIGHT : 
 status === 'error' ? theme.COLORS.RED_LIGHT : 
 'transparent'};
 
 outline-width: ${({status}) => 
 status === 'correct' || status === 'error' ? 
 '0px' : '3px'};
 outline-style: solid;
 outline-offset: -3px;
 outline-color: ${({ theme }) => theme.COLORS.GRAY_300};

 transition: outline 150ms;

 > svg
 {
  width: 14px;
  height: 14px;
 }

 > svg
 {
  color: ${({ theme, status }) => status === 'correct' ? theme.COLORS.GREEN_DARK :
  status === 'error' ? theme.COLORS.RED_DARK : ''};
 }

 > svg:first-child
 {
  display: ${({ status }) => status === 'correct' ? 'initial' : 'none'};
 }

 > svg:last-child
 {
  display: ${({ status }) => status === 'error' ? 'initial' : 'none'};
 }
`