import Card from '../../components/Card'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import bandeau from '../../assets/bandeau.png'
import '../../styles/Banner.css'
import logements from '../../datas/logements.json';

const Banner = styled.div`
  background-image: url('${bandeau}');
  max-width: 1240px;
  height: 180px;
  background-color: rgba(0, 0, 0, 0.8);
  margin: 0 auto;
  border-radius: 25px;
  color: white;
  justify-content: center;
	align-items: center;
  margin-bottom: 43px;
  @media (max-width: 767px) {
    margin-bottom: 0;
}
`

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  justify-items: center;
  max-width: 1240px;
  padding-top: 25px;
  background: #F7F7F7;
  border-radius: 30px;
  margin: 0 auto;
  text-decoration: none;
  @media (max-width: 767px) {
    background: #fff;
}
`

function Home() {
  return (
    <div className="container">
      <Banner>
				<div className="layer">
				<h1 className='h1bandeau'>Chez vous, partout et ailleurs</h1>
        </div>
			</Banner>
      <CardsContainer>
        {logements.map((profile) => (
          <Link key={`kasa-${profile.id}`} to={`/logement/${profile.id}`}>
            <Card 
              key={profile.id}
              label={profile.location}
              title={profile.title}
              cover={profile.cover}
            />
          </Link>
        ))}
      </CardsContainer>
    </div>
  )
}

export default Home
