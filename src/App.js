import './App.css';
import Navigation from './components/navigation/Navigation';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Home from './app/home/Home';
import Input from './app/input/Input';
import Result from './app/input/Result';
import Introduction from './app/introduction/Introduction';

function App() {
  return (
    <>
      <CssBaseline />

      <Router>
        <Navigation />
        <main>
          <Switch>
            <Route path={'/home'}>
              <Home />
            </Route>
            <Route path={'/introduction'}>
              <Introduction />
            </Route>
            <Route path={'/input'}>
              <Input />
            </Route>
            <Route path={'/result'}>
              <Result />
            </Route>
            <Route path={'/'}>
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
