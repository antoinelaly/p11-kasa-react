import React, { useState } from 'react';
import logements from '../../datas/logements.json';
import StarScale from '../../components/StarScale';
import '../../styles/Logements.css';
import '../../styles/Accordion.css';
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';

const Logement = (props) => {
    let {id} = props.match.params
    const logement = logements.find(logement => logement.id === id)
    let {title, rating, description, pictures, location, tags, host, equipments} = logement

    const [current, setCurrent] = useState(0)
    const length = pictures.length

    const nextSlide = () => { setCurrent(current === length -1 ? 0 : current + 1) }
    const prevSlide = () => { setCurrent(current === 0 ? length -1 : current - 1) }
    console.log(current);
    console.log(pictures);
    console.log(props);


    if(!Array(props) || props.length <= 0) { return null }

    return (
        <div className=''>
            <section className="slider">
                <ArrowLeft className="left-arrow" onClick={prevSlide}/>
                <ArrowRight className="right-arrow" onClick={nextSlide}/>
                {pictures.map((picture, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (

                <div className="each-img" style={{'backgroundImage': `url(${picture})`}}>
                        <span>{index + 1} / {length}</span>
                        </div>
                
                )}
                        </div>
                    )
                    })}
            </section>
            <div className="content-container">
                <div className="left-container">
                    <h1>{title}</h1>
                    <h3>{location}</h3>

                    <div className="lestags">
                        {tags.map((tag, index)=> (
                            <div className="each-tags" key={index}>{tag}
                            </div>
                        ))} 
                    </div>
                </div>
                <div className="right-container">
                    <div className="theface">
                        <h3>{host.name}</h3>
                        <img className="face-img" src={host.picture} alt="portrait"></img>
                    </div>
                    <StarScale  scaleValue={rating} />
                </div>
            </div>

            <div className="content-container">
                <div className="tabs content-desc">
                    <div className="tab ">
                        <input type="checkbox" id="chck1" />
                        <label className="tab-label" for="chck1">Description</label>
                        <div className="tab-content">
                        <p>{description}</p>
                        </div>
                    </div>
                </div>
                <div className="tabs content-equi">
                    <div className="tab">
                        <input type="checkbox" id="chck2" />
                        <label className="tab-label" for="chck2">Equipments</label>
                        <div className="tab-content">
                        <ul>
                    {equipments.map((equipment, index)=> (
                            <li className="each-equi" key={index}>{equipment}
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

export default Logement;