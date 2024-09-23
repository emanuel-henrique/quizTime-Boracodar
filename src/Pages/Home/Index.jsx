import { Container, Content, CardSection } from "./Styles"

import { Header } from "../../Components/Header"
import { CardOption } from "../../Components/CardOption"
import { Footer } from "../../Components/Footer/Index"
import CardImage from "../../Assets/CardImage.png"

export function Home() {
  return (
    <Container>
      <main>
        <Content>
          <Header />
          <h2>Qual era o objetivo da personagem?</h2>
          <CardSection>
            <CardOption text={'Caçar tesouros'}>
              <img src={CardImage} alt="Imagem card de opção" />
            </CardOption>
            <CardOption status='correct' text={'Ter mais tempo para ler livros'}> 
              <img src={CardImage} alt="Imagem card de opção" />
            </CardOption>
            <CardOption status='error' text={'Navegar pelos 7 mares'}>
              <img src={CardImage} alt="Imagem card de opção" />
            </CardOption>
          </CardSection>
          <Footer />
        </Content>
      </main>
    </Container>
  )
}