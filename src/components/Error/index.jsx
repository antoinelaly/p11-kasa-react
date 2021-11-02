import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Link } from 'react-router-dom'
import { StyledLink } from '../../utils/style/Atoms'

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  align-items: center;
  color: #FF6060;
`

const ErrorTitle = styled.h1`
  font-size: 288px;
  color: #FF6060;
  font-weight: 700;
  margin: 0;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: #FF6060;
  font-size: 36px;
`

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>404</ErrorTitle>
      <ErrorSubtitle>
      Oups! La page que vous demandez n'existe pas.
      </ErrorSubtitle>
      <Link to="/">
      <StyledLink to="/"><h6>Retourner sur la page d’accueil</h6></StyledLink>
        
      </Link>
    </ErrorWrapper>
  )
}

export default Error
