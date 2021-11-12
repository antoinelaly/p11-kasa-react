import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Component } from 'react'
import '../../styles/Card.css'


const CardLabel = styled.span`
  color: #fff;
  font-size: 18px;
  font-weight: normal;
  padding-left: 15px;
  position: absolute;
  padding-top: 250px;
  width: 325px;
  text-decoration: none;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
  border-radius: 10px;
  z-index:20;
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
  margin: 25px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 767px) {
    width: 100%;
    margin: 10px 0;
}
`
/*
* @classdesc component to render cards 
* @param { String } cover
* @param { String } label
*/

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
          <CardLabel className='letitre'><h4>{label}</h4></CardLabel>
      </CardWrapper>
    )
  }
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}

Card.defaultProps = {
  label: '',
  cover: '',
}

export default Card
