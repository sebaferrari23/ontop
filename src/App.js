import StoreProvider from './store'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { GlobalStyle } from './styled';
import Navbar from './components/Navbar';
import Contracts from './pages/Contracts'

function App() {
  return (
    <StoreProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/">
            <Contracts />
          </Route>
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
