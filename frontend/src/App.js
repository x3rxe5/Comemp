import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoutes";

function App() {
  return (
    <>
    <Router>
      <Header />
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/">
          <Home />
      </Route>
      <Switch>
        <ProtectedRoute exact path="/dashboard" component={Dashboard}/>
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
