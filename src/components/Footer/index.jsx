import { Link } from 'react-router-dom'
import styled from 'styled-components'
//import { StyledLink } from '../../utils/style/Atoms'
import LeLogob from '../../assets/lelogob.svg'

const HomeLogo = styled.img`
  height: 34px;
  width: 105px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`

const NavContainer = styled.nav`
  padding: 30px;
  align-items: center;
  margin: 0 auto;
  color: #fff;
  background-color: #000;
  margin-top: 100px;
`

const RightsSubtitle = styled.h4`
  font-weight: 300;
  color: #fff;
  font-size: 24px;
  margin-left: auto;
  margin-right: auto;
  width: 12em;
`

function Footer() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={LeLogob} />
      </Link>
      <div>
        <RightsSubtitle to="/">© Kasa. All rights reserved</RightsSubtitle>
      </div>
    </NavContainer>
  )
}

export default Footer
