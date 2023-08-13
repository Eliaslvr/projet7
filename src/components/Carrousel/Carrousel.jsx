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

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };

    return (
        // <div {...settings}>
        <div className='carousel settings'>
            <div className='carousel-container'>
                <img className='img' src={image[currentSlide]} alt={`Slide ${currentSlide}`} />
            </div>
            <div className='carousel-buttons'>
                <i class="carousel-arrow-left fas fa-chevron-left" onClick={goToPrevSlide}></i>
                <i class="carousel-arrow-right fas fa-chevron-right" onClick={goToNextSlide}></i>
            </div>
        </div>
    );
};

export default Carrousel;