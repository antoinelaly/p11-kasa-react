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
* createGlobalStyle
* Single Page Application with React Router: render some UI (user interface) when its path matches the current URL
* Props are like function arguments, same syntax as HTML attributes
* route declaration which allows us to access the history
* Render Props for Cross-Cutting Concerns render={(props) => : 
* reuse this behavior in another component
* a render prop is a function prop that a component uses to know what to render
* encapsulate the functionality so that we can share it between components
* https://en.reactjs.org/docs/render-props.html
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