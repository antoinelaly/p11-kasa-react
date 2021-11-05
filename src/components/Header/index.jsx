import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import LeLogo from '../../assets/lelogo.svg'
import '../../styles/Header.css'

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
* 
*/

function Header() {
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

export default Header
