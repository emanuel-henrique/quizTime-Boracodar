import styled from "styled-components";

export const Container = styled.div`
 width: 100vw;
 height: 100dvh;
 display: grid;
 place-content: center;

 > main
 {
  display: flex;
  flex-direction: column;
  padding: 64px 0;

  width: 75vw;
  max-width: 1060px; 
  height: 90dvh;
  max-height: 786px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  box-shadow: 
  0px 4px 4px 0px rgba(0, 0, 0, 0.25), 
  0px 6px 12px 0px rgba(0, 0, 0, 0.25);

  border-radius: 8px;
 }
`

export const Content = styled.div`
 width: 842px;
 height: 100%;
 margin: 0 auto;
 display: flex; 
 flex-direction: column;
 justify-content: space-between;

 h2
 {
  width: 412px;
  font-size: 24px;
  font-weight: bold;
  line-height: 120%;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  text-align: center;
  margin: 0 auto;
 }
`

export const CardSection = styled.section`
 display: flex;
 justify-content: space-between;
`