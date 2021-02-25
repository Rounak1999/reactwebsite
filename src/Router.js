import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './home.css';
import './style.css';
import Login from './Login';
import Signin from './Signin';
import Wav from './img/wave.png';
import Ilu from './img/hero-illustration1.svg';

export default function App() {
  return (
    <Router>
      <div class="homediv">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signin">Signup</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );

}
 const Home = () => {
  return (
    <div>
             <img class="wave" src={Wav} alt="first" />
        <div class="container">
            <div class="img">
                <img src={Ilu} alt="second" />
            </div>
            <div  class="login-content">
            <h2 class="title">Welcome<br></br>To The World<br></br>of Exams<br></br>Signup and start Learning</h2>
          
            
           </div>
        </div>
    </div>
  );
}
 

