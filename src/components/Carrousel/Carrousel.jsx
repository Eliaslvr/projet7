import React, { useState } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel'
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import elementJSON from '../../element.json'
import { useParams } from 'react-router-dom';

const Carrousel = () => {

    const getId = (id) => {
        return elementJSON.find((element) => element.id === id);
    }

    const { id } = useParams();
    const element = getId(id);
    const image = element.pictures.map((image) => 
        image
    )

    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = image.length;

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div {...settings}>
            <div className='carousel-container'>
                <img className='img' src={image[currentSlide]} alt={`Slide ${currentSlide}`} />
                <p>Legend 1</p>
            </div>
            <div className='carousel-buttons'>
                <button onClick={goToPrevSlide}>Précédent</button>
                <button onClick={goToNextSlide}>Suivant</button>
            </div>
        </div>
    );
};

export default Carrousel;