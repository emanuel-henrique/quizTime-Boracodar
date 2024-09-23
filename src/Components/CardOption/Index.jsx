import { Container, RadioInput } from "./Styles";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export function CardOption({ status, text, children, ...rest }) {
 return (
  <Container
   status={status}
   text={text}
   {...rest}
  >
   <RadioInput status={status}>
    <FaCheck />
    <FaXmark />
   </RadioInput>
   {children}
   <span>{text}</span>
  </Container>
 )
}