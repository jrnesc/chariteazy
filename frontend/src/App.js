import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import './index.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/project/:id">
          <Project />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
