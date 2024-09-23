import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 *
 {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 body
 {
  background: linear-gradient(90deg, rgba(153,109,255,1) 0%, rgba(99,59,188,1) 100%);
 }

 body, input, button, textarea
 {
  font-family: "Sora", sans-serif;
  -webkit-font-smoothing: antialiased;
 }

 a 
 {
  text-decoration: none;
 }

 button, a 
 {
  cursor: pointer;
  transition: filter 0.2s;
 }

 button:hover, a:hover
 {
  filter: brightness(0.9);
 }
`