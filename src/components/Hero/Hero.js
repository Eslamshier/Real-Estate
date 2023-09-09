import React from 'react';
import './Hero.css';
import CountUp from 'react-countup';
import { HiLocationMarker } from 'react-icons/hi';
import { motion } from "framer-motion"

function Hero() {
    return (
        <section className='hero-wrapper' >
            <div className='hero-container paddings innerWidth flexCenter'>

                <div className='hero-left flexColCenter'>
                    <div className='hero-tittle'>
                        <div className='orange-circle'></div>
                        <motion.h1
                            initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2, type: "spring" }}
                        > Discover < br /> Most Suitable<br /> Property</motion.h1>
                    </div>

                    <div className='hero-des flexColCenter'>
                        <span className='secondaryText'>Find a variety of properties that suit you very easilty</span>
                        <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                    </div>

                    <div className='search-bar flexCenter'>
                        <HiLocationMarker color='var(--blue)' size={25} />
                        <input type='text'></input>
                        <button className='button'>Search</button>
                    </div>

                    <div className='stats flexCenter'>
                        <div className='stat flexColCenter'>
                            <span>
                                <CountUp start={8800} end={9000} duration={4} />
                                <span className='plus'>+</span>
                            </span>
                            <span className='secondaryText'>Premium Products</span>
                        </div>
                        <div className='stat flexColCenter'>
                            <span>
                                <CountUp start={1950} end={2000} duration={4} />
                                <span className='plus'>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customer</span>
                        </div>
                        <div className='stat flexColCenter'>
                            <span>
                                <CountUp start={0} end={28} duration={4} />
                                <span className='plus'>+</span>
                            </span>
                            <span className='secondaryText'>Awards Winning</span>
                        </div>
                    </div>
                </div>

                <div className='hero-right flexCenter'>
                    <motion.div
                        initial={{ x: "7rem", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, type: "spring" }}
                        className='image-container'>
                        <img src='./hero-image.png' alt='image'></img>
                    </motion.div>
                </div>
            </div>
        </section >
    )
}

export default Hero;
