import React, { Component } from "react";
import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom'
import Home from '../../pages/Home'
import Apropos from '../../pages/Apropos'
import Logement from '../../pages/Logement'
import Header from '../Header'
import Footer from '../Footer'
import Error from '../../pages/Error'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat', Helvetica, sans-serif;
    }

    body {
      margin: 0;
    }
`
/*
* @classdesc give a path to pages
* <Route path="/logement/:id" render={(props) => <Logement {...props} />} /> ????
*/

class Lerouter extends Component {
  render() {
    return (
      <div>
    <HashRouter  basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/apropos">
          <Apropos />
        </Route>
        <Route path="/logement/:id"
        render={(props) => <Logement {...props} />}
        />
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </HashRouter>
    </div>
    );
  }
}

export default Lerouter;