import { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
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
  @media (max-width: 767px) {
    font-size: 12px;
}
`

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { lelogob } = this.props

    return (
      <NavContainer>
        <Link to="/">
          <HomeLogo src={lelogob} />
        </Link>
        <div>
          <RightsSubtitle to="/">© Kasa. All rights reserved</RightsSubtitle>
        </div>
      </NavContainer>
    )
  }
}

Footer.propTypes = {
  lelogob: PropTypes.string.isRequired,
}

Footer.defaultProps = {
  lelogob: LeLogob,
}

export default Footer
