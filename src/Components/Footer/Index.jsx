import { Container } from './Styles'
import { Question } from '../Questions/Index'
import { SkipButton } from '../SkipButton/Index'

export function Footer() {
 return (
  <Container>
   <Question />
   <SkipButton />
  </Container>
 )
}