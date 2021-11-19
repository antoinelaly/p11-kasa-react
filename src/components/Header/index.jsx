import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import LeLogo from '../../assets/lelogo.svg'
import '../../styles/Header.css'
import { Component } from 'react'

const HomeLogo = styled.img`
  height: 68px;
  width: 210px;
  color: #FF6060;
  @media (max-width: 767px) {
    height: 45px;
    width: 110px;
}
`

const NavContainer = styled.nav`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto;
  text-transform: uppercase;
`

/*
* <Link> restitue un <a> avec un vrai href
* <NavLink> peut se définir comme "actif" lorsque sa prop correspond à l'emplacement actuel.
*/

  class Header extends Component {
    constructor(props) {
      super(props)
      this.state = {}
    }
  
    render() {
    return (
      <NavContainer>
        <Link to="/">
          <HomeLogo src={LeLogo} />
        </Link>
        <div  className="lemenu">
          <NavLink to="/" className="normal" activeClassName="active" exact>Accueil</NavLink>
          <NavLink to="/apropos" className="normal" activeClassName="active" exact>A Propos</NavLink>
        </div>
      </NavContainer>
    )
  }
}

export default Header
