import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={About} />
          {/* <Route path="/home" exact component={Home} /> */}
          {/* <Route path="/login" exact component={Login} /> */}
          {/* <Route path="/profile" exact component={Profile} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
