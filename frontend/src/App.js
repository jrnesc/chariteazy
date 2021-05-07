import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";
import "./index.css";

function App() {
  const [IsOpen, setIsOpen] = useState(false);
  const [causes, setCauses] = useState([]);

  useEffect(() => {
    const getCauses = async () => {
      const causesFromServer = await fetchCauses();
      setCauses(causesFromServer);
    };

    getCauses();
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // fetch causes
  const fetchCauses = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const res = await fetch(`http://127.0.0.1:8000/api/v1/causes`, requestOptions);
    const data = await res.json();

    return data;
  };

  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header onLoginClick={openModal} />
        <AccountModal IsOpen={IsOpen} onClose={closeModal} />
        <div className="container mx-auto mb-auto px-10">
          <Switch>
            <Route exact path="/">
              <Home onSignupClick={openModal} causes={causes} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/projects">
              <Projects causes={causes} />
            </Route>
            <Route exact path="/project">
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
