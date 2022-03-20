import React from "react";
import { Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ApplicationPage from "./components/ApplicationPage";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminPage from "./components/admin/AdminPage";

function App() {
  return (
    <div>
      <Header />

      <Footer />

      <Switch>
        <Route exact path="/" component={ApplicationPage} />
        <Route path="/Admin" component={AdminPage} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
      </Switch>

    </div>
  );
}

export default hot(App);
