import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";
import './index.css';

function App() {
  const [IsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header onLoginClick={openModal} />
        <AccountModal IsOpen={IsOpen} onClose={closeModal} />
        <div className="container mx-auto mb-auto px-10">
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
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
