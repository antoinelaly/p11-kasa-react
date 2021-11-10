import { Component } from 'react'
import styled from 'styled-components'
import bandeau from '../../assets/apropos.png'
import '../../styles/Banner.css'
import '../../styles/Apropos.css';

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
    margin-bottom: 20px;
    height: 110px;
    border-radius: 10px;
}
`

/* 
* match : {id} = props.match.params
* css
*/


class Logement extends Component {
    constructor(props) {
    super(props)
    this.state = { }
    }

    render() {

        return (
            <div className='container'>
                <Banner>
                    <div className="layer">
                    </div>
                </Banner>
                <div className="content-container-app">

                    <div className="tabs content-app">
                        <div className="tab">
                            <input type="checkbox" id="chck1" />
                            <label className="tab-label-app" for="chck1"><h3>Fiabilité</h3></label>
                            <div className="fiabilite">
                            <p>Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.</p>
                            </div>
                        </div>
                    </div>
                    <div className="tabs content-app">
                        <div className="tab">
                            <input type="checkbox" id="chck2" />
                            <label className="tab-label-app" for="chck2"><h3>Respect</h3></label>
                            <div className="respect">
                            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation entraînera une exclusion de notre plateforme.</p>
                            </div>
                        </div>
                    </div>
                    <div className="tabs content-app">
                        <div className="tab">
                            <input type="checkbox" id="chck3" />
                            <label className="tab-label-app" for="chck3"><h3>Service</h3></label>
                            <div className="respect">
                            <p>Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.</p>
                            </div>
                        </div>
                    </div>
                    <div className="tabs content-app">
                        <div className="tab">
                            <input type="checkbox" id="chck4" />
                            <label className="tab-label-app" for="chck4"><h3>Responsabilité</h3></label>
                            <div className="respect">
                            <p>Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Logement;