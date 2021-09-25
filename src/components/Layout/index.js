import { Section, Container, Title } from './styled'

const Layout = ({ children, title }) => {
  return (
    <Section>
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </Section>
  )
}

export default Layout
