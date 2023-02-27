// Libraries
import React from 'react'

// Components
import {AccordionHeader} from './AccordionHeader'
import {AccordionBodyItem} from './AccordionBodyItem'
import './Accordion.scss'

import {AccordionProps, AccordionRoot, AccordionRef} from './Accordion';

function Accordion(props: AccordionProps) {
    return <AccordionRoot {...props} />;
}

Accordion.displayName = 'Accordion';
Accordion.Accordion = AccordionRoot;
Accordion.AccordionHeader = AccordionHeader;
Accordion.AccordionBodyItem = AccordionBodyItem;

export {AccordionProps, AccordionRef};
export default Accordion;

