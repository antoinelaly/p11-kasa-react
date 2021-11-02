import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Component } from 'react'
//import colors from '../../utils/style/colors'
import '../../styles/Card.css'
//import { StyledLink } from '../../utils/style/Atoms'
//import { logementListe } from '../../datas/logementListe'


const CardLabel = styled.span`
  color: #fff;
  font-size: 18px;
  font-weight: normal;
  padding-left: 15px;
  position: relative;
  top: -50px;
  height:60px;
  text-decoration: none;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
  border-radius: 10px;
  z-index:10;
`

const CardImage = styled.img`
  height: 100%;
  width: 100%;
  align-self: center;
  border-radius: 10px;
  object-fit: cover;
  overflow: hidden;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  wflex: 1 1 0;
  height: 340px;
  width: 340px;
  transition: 200ms;
  margin: 16px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 767px) {
    width: 380px;
    margin: 0 16px;
}
`

//function Card({ label, title, cover }) {
class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { cover, label } = this.props
  

    return (
      <CardWrapper >
          <CardImage src={cover} alt="Logement" />
          <CardLabel className='letitre'>{label}</CardLabel>
      </CardWrapper>
    )
  }
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  label: '',
  title: '',
  cover: '',
}

export default Card
