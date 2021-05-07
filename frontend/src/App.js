import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import SubmitProject from "./pages/SubmitProject";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";
import { login, logout } from "./services/user.service";
import "./index.css";


function App() {
  const [IsOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({});
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

  const handleLoginFormSubmit = async (username, password) => {
    const data = await login(username, password);
    // console.log(data['user'])
    const userData = data['user']
    setUser(userData);
    console.log(user)
    // console.log(user.username)
    // console.log(user.pk)
    // console.log(user.pk)
    
    // console.log(user)
    setIsOpen(!IsOpen);

   
  };

  const handleLogoutClick = () => {
    logout();
    setUser({});
  };

  // fetch causes
  const fetchCauses = async () => {
    
    const requestOptions = {
      method: "GET",
      credentials:'include',
      headers: { "Content-Type": "application/json", },
     
    };
    const res = await fetch(`http://127.0.0.1:8000/api/v1/causes`, requestOptions);
    const data = await res.json();

    return data;
  };

  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header onLoginClick={openModal} />
        <AccountModal
          IsOpen={IsOpen}
          onClose={closeModal}
          onLoginFormSubmit={handleLoginFormSubmit}
        />
        <div className="container mx-auto mb-auto px-10">
          <Switch>
            <Route exact path="/">
              <Home onSignupClick={openModal} causes={causes} />
            </Route>
            {/* <Route exact path="/about">
              <About />
            </Route> */}
            <Route exact path="/profile">
              <Profile user={user} />
            </Route>
            <Route exact path="/projects">
              <Projects causes={causes} />
            </Route>
            <Route exact path="/project">
              <Project />
            </Route>
            <Route exact path="/submitcause">
              <SubmitProject />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
