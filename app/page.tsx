import Header from '@/src/components/header'
import ButtonReload from '@/src/components/ui/button-reload'
import Contact from '@/src/page/contact'
import Footer from '@/src/page/footer'
import Presentation from '@/src/page/presentation'
import Proyect from '@/src/page/proyect'
import WorkExperience from '@/src/page/work-experience'
import { Container } from '../styled-system/jsx'

export default function Home() {
  return (
    <Container>
      <ButtonReload />
      <Header />
      <Presentation />
      <WorkExperience />
      <Proyect />
      <Contact />
      <Footer />
    </Container>
  )
}
