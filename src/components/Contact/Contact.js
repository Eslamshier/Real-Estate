import React from 'react';
import './Contact.css';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';
import { BiSolidMessageAltDetail } from 'react-icons/bi';
import { forwardRef } from 'react';




const Contactt = forwardRef((props, ref) => {
    return (
        <section ref={ref} className='c-wrapper'>
            <div className='c-container paddings flexCenter innerWidth'>
                <div className='c-left flexColStart'>
                    <span className='orangeText'>Our Contact Us</span>
                    <span className='primaryText'>Easy to contact us</span>
                    <span className='secondaryText'>
                        We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better
                    </span>

                    <div className='contactModes flexColStart'>
                        <div className='row flexStart'>
                            <div className='mode flexColStart'>
                                <div className='flexStart'>
                                    <div className='icon flexCenter'>
                                        <MdCall size={25} />
                                    </div>
                                    <div className='detail flexColStart'>
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>010 1064 103 190</span>
                                    </div>
                                </div>
                                <div className='button flexCenter'>Call Now</div>
                            </div>

                            <div className='mode flexColStart'>
                                <div className='flexStart'>
                                    <div className='icon flexCenter'>
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className='detail flexColStart'>
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>010 1064 103 190</span>
                                    </div>
                                </div>
                                <div className='button flexCenter'>Chat Now</div>
                            </div>

                        </div>

                        <div className='row flexStart'>
                            <div className='mode flexColStart'>
                                <div className='flexStart'>
                                    <div className='icon flexCenter'>
                                        <MdOutlineSlowMotionVideo size={25} />
                                    </div>
                                    <div className='detail flexColStart'>
                                        <span className='primaryText'>Video</span>
                                        <span className='secondaryText'>010 1064 103 190</span>
                                    </div>
                                </div>
                                <div className='button flexCenter'>Video Now</div>
                            </div>

                            <div className='mode flexColStart'>
                                <div className='flexStart'>
                                    <div className='icon flexCenter'>
                                        <BiSolidMessageAltDetail size={25} />
                                    </div>
                                    <div className='detail flexColStart'>
                                        <span className='primaryText'>Message</span>
                                        <span className='secondaryText'>010 1064 103 190</span>
                                    </div>
                                </div>
                                <div className='button flexCenter'>Message Now</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='c-right'>
                    <div className='img-container'>
                        <img src='./r2.png' alt='imgContact'></img>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default Contactt;
