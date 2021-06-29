import './App.css';
import Navigation from './components/navigation/Navigation';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Home from './app/Home';
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
