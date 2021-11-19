import { Component } from 'react'
import logements from '../../datas/logements.json';
import StarScale from '../../components/StarScale';
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount';
import Slide from '../../components/Slide';
import '../../styles/Logements.css';
import '../../styles/slider.css';
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';

/* 
* {id} = props.match.params : from router / Home
* activeSlide: this.state 0 // state initiale 
* this.setState > déclenche un nouveau render du composant
* find in logements.json the props id and fill out elements
*/

class Logement extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            activeSlide: 0 
        };
    }

    render() {
        
        const { id } = this.props.match.params
    const logement = logements.find(logement => logement.id === id)
    let {title, rating, description, pictures, location, tags, host, equipments} = logement

    const  prevSlide = () => {
        let slide = this.state.activeSlide - 1 < 0
          ? pictures.length - 1
          : this.state.activeSlide - 1;
        this.setState({
          activeSlide: slide
        });
      }

      const   nextSlide = () => {
        let slide = this.state.activeSlide + 1 < pictures.length
          ? this.state.activeSlide + 1
          : 0;
        this.setState({
          activeSlide: slide
        });
      }
      
        return (
            
            <div className=''>
                <ScrollToTopOnMount />
                <section className="slider">
                <div>
 
                {pictures.map((slide, index, array) => {
            return (
              <Slide key={`pictures-${index}`}
                background={slide}
                active={index === this.state.activeSlide}
              />
            );
          })}
          
        <ArrowLeft className="rightArrow" onClick={prevSlide}/>
        <ArrowRight className="leftArrow" onClick={nextSlide}/>
      </div>

                </section>
                
                <div className="content-container">
                    <div className="left-container" >
                        <h1 key="titleId1">{title}</h1>
                        <h3 key="locationId1">{location}</h3>

                        <div className="lestags">
                            {tags.map((tag, index)=> (
                                <div className="each-tags" key={`tag-${index}`}>{tag}
                                </div>
                            ))} 
                        </div>
                    </div>
                    <div className="right-container">
                        <div className="theface">
                            <h3 key="nameId1">{host.name}</h3>
                            <img className="face-img"  key="imageId1" src={host.picture} alt="portrait"></img>
                        </div>
                        <StarScale  key="2" starValue={rating} />
                    </div>
                </div>

                <div className="content-container">
                    <div className="tabs content-desc">
                        <div className="tab ">
                            <input type="checkbox" id="chck1" />
                            <label className="tab-label" htmlFor="chck1"><h3>Description</h3></label>
                            <div className="tab-content">
                            <p key="descriptionId1">{description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="tabs content-equi">
                        <div className="tab">
                            <input type="checkbox" id="chck2" />
                            <label className="tab-label" htmlFor="chck2"><h3>Equipments</h3></label>
                            <div className="tab-content">
                            <ul>
                        {equipments.map((equipment, index)=> (
                                <li className="each-equi" key={`equipment-${index}`}>{equipment}
                                </li> 
                            ))} 
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
} 

export default Logement;