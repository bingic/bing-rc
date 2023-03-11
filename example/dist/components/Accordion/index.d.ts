import React from 'react';
import './Accordion.scss';
import { AccordionProps, AccordionRef } from './Accordion';
declare function Accordion(props: AccordionProps): JSX.Element;
declare namespace Accordion {
    var displayName: string;
    var Accordion: React.ForwardRefExoticComponent<AccordionProps & React.RefAttributes<HTMLDivElement>>;
    var AccordionHeader: React.ForwardRefExoticComponent<import("./AccordionHeader").AccordionHeaderProps & React.RefAttributes<HTMLButtonElement>>;
    var AccordionBodyItem: React.ForwardRefExoticComponent<import("./AccordionBodyItem").AccordionBodyItemProps & React.RefAttributes<HTMLDivElement>>;
}
export { AccordionProps, AccordionRef };
export default Accordion;
