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

import ProductsList from './components/ProductList/ProductList';
import Details from './components/ProductList/Details';
import Cart from './components/Cart/Cart';
import Default from './components/ProductList/Default';
import { ProductProvider } from './components/ProductList/context';
import Modal from "./components/ProductList/Modal";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ProductProvider>
          <MainLayout>
            <Switch>
              <Route exact path={"/"} component={WelcomePage} />
              <Route exact path={"/FAQ"} component={FAQ} />
              <Route exact path={"/contact"} component={Contact} />
              <Route exact path={"/regulations"} component={Regulations} />

              <Route exact path={"/home"} component={ProductsList} />
              <Route exact path={"/details"} component={Details} />
              <Route exact path={"/cart"} component={Cart} />
              <Route exact path={"/regulations"} component={Regulations} />

              <Route component={Default} />
            </Switch>
          </MainLayout>
          <Modal />
        </ProductProvider>
        <Footer />
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
