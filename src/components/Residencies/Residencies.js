import React from 'react';
import './Residencies.css';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// dota from json
import data from '../../utils/Slider.json';
import { SliderSettings } from '../../utils/common';
import { forwardRef } from 'react';


const Residenciess = forwardRef((props, ref) => {
    return (
        <section ref={ref} className='r-wrapper'>
            <div className='r-container paddings innerWidth'>
                <div className='r-head flexColStart'>
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Residencies</span>
                </div>

                <Swiper {...SliderSettings}>
                    <SliderButton />
                    {
                        data.map((card, i) => (
                            <SwiperSlide className='Swiper' key={i}>
                                <div className='r-card flexColStart'>
                                    <img src={card.image} alt='home'></img>

                                    <span className='r-price secondaryText'>
                                        <span style={{ color: 'orange' }}>$</span>
                                        <span>{card.price}</span>
                                    </span>

                                    <span className='primaryText'>{card.name}</span>
                                    <span className='primaryText'>{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
})

export default Residenciess;

const SliderButton = () => {
    const swiper = useSwiper();
    return (
        <div className='r-buttons'>
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}
