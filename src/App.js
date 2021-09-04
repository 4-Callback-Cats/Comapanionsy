/* eslint-disable prettier/prettier */
import Header from './components/Header';
import About from './components/About';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
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
