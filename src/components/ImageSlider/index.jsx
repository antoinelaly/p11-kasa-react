import React, {useState} from "react";
import { SliderData } from "../../datas/SliderData";
import products from '../../datas/products.json'
import {MdArrowBackIos, MdArrowForwardIos} from 'react-icons/md';
import '../../styles/Logements.css'

const ImageSlider = ({ slides }) => {
const [current, setCurrent] = useState(0)
const length = slides.length

const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1)
}

const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current - 1)
}

console.log(current);

if(!Array(slides) || slides.length <= 0) {
    return null
}

    return (
        <section className="slider">
            <MdArrowBackIos className="left-arrow" onClick={prevSlide}/>
            <MdArrowForwardIos className="right-arrow" onClick={nextSlide}/>
            {products.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={slide.pictures[0]} alt='travel image' className="limage"/>)}
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSlider;