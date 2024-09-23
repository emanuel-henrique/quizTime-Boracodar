import { Container, Logo, Score} from "./Styles";
import { FaCheck } from "react-icons/fa";

export function Header()
{
 return(
  <Container>
   <Logo>👋 <span>Quiz</span>Time</Logo>
   <Score>
    <FaCheck color='#ABF770'/>
    <span>3</span>
   </Score>
  </Container>
 )
}