import { Container } from './Styles'
import { NavArrowRight } from 'iconoir-react';

export function SkipButton({...rest}) {
 return (
  <Container
   type='button'
   {...rest}
  >
   <NavArrowRight />
  </Container>
 )
}