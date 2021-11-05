import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Logement from './pages/Logement'
import Kasa from './pages/Kasa'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
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
* Single Page Application with React Router: render some UI (user interface) when its path matches the current URL
* Props are like function arguments, same syntax as HTML attributes
* route declaration which allows us to access the history
* Render Props for Cross-Cutting Concerns render={(props) => : 
* reuse this behavior in another component
* a render prop is a function prop that a component uses to know what to render
* encapsulate the functionality so that we can share it between components
* https://en.reactjs.org/docs/render-props.html
*/

ReactDOM.render(
  <React.StrictMode>
    <Router>
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
        <Route path="/p11-kasa-react">
          <Kasa />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
