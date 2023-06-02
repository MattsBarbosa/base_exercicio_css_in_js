import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, { Container } from './style'
import { ThemeProvider } from 'styled-components'
import Theme from './themes/cores'

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <EstiloGlobal />
        <Header />
        <Hero />
        <Container>
          <ListaVagas />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
