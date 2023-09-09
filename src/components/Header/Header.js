import React, { useState } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { useRef } from 'react';

const Header = ({ one, two, three, four }) => {

    const [menuOpen, setmuneOpen] = useState(false);

    const getMenuStayles = (menuOpen) => {
        if (document.documentElement.clientWidth <= 800) {
            return {
                right: !menuOpen && '-100%'
            }
        }
    }

    // scroll 


    return (
        <section className='h-wrapper'>
            <div className='h-container flexCenter padding innerWidth'>
                <img src='./logo.png' alt='logo' width={100}></img>
                <OutsideClickHandler
                    onOutsideClick={() => {
                        setmuneOpen(false)
                    }}
                >
                    <div className='h-menu flexCenter' style={getMenuStayles(menuOpen)}>
                        <a onClick={() => one.current.scrollIntoView({ behavior: 'smooth' })}>Residencies</a>
                        <a onClick={() => two.current.scrollIntoView({ behavior: 'smooth' })} >Oru Value</a>
                        <a onClick={() => three.current.scrollIntoView({ behavior: 'smooth' })}>Contact Us</a>
                        <a onClick={() => four.current.scrollIntoView({ behavior: 'smooth' })}>Get Start</a>
                        <button className='button'>
                            <a href='#'>Contact</a>
                        </button>
                    </div>
                </OutsideClickHandler>

                <div className='menu-icon' onClick={() => setmuneOpen((prev) => !prev)}>
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </section>
    )
}

export default Header
