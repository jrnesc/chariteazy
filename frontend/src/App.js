import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Projects from "./pages/Projects"
import Project from "./pages/Project"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/project/:id">
          <Project />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
