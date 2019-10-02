import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './index.css';

import { MainLayout } from "./components/MainLayout";
import WelcomePage, { Root } from "./components/Root/Root";
import { Home } from "./components/Home/Home";
import { User, FAQ } from "./components/FAQ/FAQ";
import { NoMatch } from "./components/NoMatch/NoMatch";
import { Contact } from "./components/Contact/Contact";
import { Regulations } from "./components/Regulations/Regulations";
import Footer from './components/Footer/Footer';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={"/"} component={WelcomePage} />
            <Route exact path={"/home"} component={Home} />
            <Route exact path={"/FAQ"} component={FAQ} />
            <Route exact path={"/contact"} component={Contact} />
            <Route exact path={"/regulations"} component={Regulations} />
            <Route component={NoMatch} />
          </Switch>
          <Footer/>
        </MainLayout>

      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
