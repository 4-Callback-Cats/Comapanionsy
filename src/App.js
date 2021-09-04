import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Login from './components/Login';
import { ProvideAuth } from './lib/auth';
import YourProfile from './components/YourProfile';
import Footer from "./components/Footer";
import Profile from "./components/cards-section/Profile";

function App() {
  return (
    <BrowserRouter>
      <ProvideAuth>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={About} />
            {/* <Route path="/home" exact component={Home} /> */}
            <Route path="/login" exact component={Login} />
            <Route path="/profile" exact component={YourProfile} />
            <Route path="/meet-people" exact component={Profile} />
          </Switch>
          <Footer />
        </div>
      </ProvideAuth>
    </BrowserRouter>
  );
}

export default App;
