import React, { useState } from 'react';
import './Value.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import 'react-accessible-accordion/dist/fancy-example.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import data from '../../utils/accordion';
import { forwardRef } from 'react';

const Valuee = forwardRef((props, ref) => {
    return (
        <section ref={ref} className='v-wrapper'>
            <div className='v-container paddings innerWidth flexCenter'>

                <div className='v-left'>
                    <div className='img-container'>
                        <img src='./value.png' alt='imagValue'></img>
                    </div>
                </div>

                <div className='v-right flexColStart'>
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value We Give to You</span>
                    <span className='secondaryText'>
                        We always ready to help by providijng the best services for you.<br />
                        We beleive a good blace to live can make your life better
                    </span>

                    <Accordion
                        className='accordion'
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {
                            data.map((item, i) => {
                                // eslint-disable-next-line react-hooks/rules-of-hooks
                                const [className, setClassName] = useState(null);
                                return (
                                    <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='accordionItemButton flexCenter'>

                                                <AccordionItemState>
                                                    {({ expanded }) =>
                                                        expanded
                                                            ? setClassName("expanded")
                                                            : setClassName("collapsed")}
                                                </AccordionItemState>

                                                <div className='icon flexCenter'>{item.icon}</div>
                                                <span className='primaryText'>{item.heading}</span>
                                                <div className='icon flexCenter'>
                                                    <MdOutlineArrowDropDown size={20} />
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p className='secondaryText'>{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    )
})

export default Valuee;
