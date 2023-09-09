import React from 'react';
import './GetStart.css';
import { forwardRef } from 'react';


const GetStartt = forwardRef((props, ref) => {
    return (
        <section ref={ref} className='g-wrapper innerWidth paddings'>

            <div className='inner-container flexColCenter'>
                <span className='primaryText'>Get started with Homyz</span>
                <span className='secondaryText'>
                    Subscribe and find super attractive price quotes from us.<br />
                    Find your residence soon
                </span>
                <button className='button'>
                    <a href='#'>Get started</a>
                </button>
            </div>

        </section>
    )
})

export default GetStartt
