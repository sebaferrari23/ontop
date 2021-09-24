import StoreProvider from './store'
import { GlobalStyle } from './styled';
import Navbar from './components/Navbar';

function App() {
  return (
    <StoreProvider>
      <GlobalStyle />
      <Navbar />
    </StoreProvider>
  );
}

export default App;
