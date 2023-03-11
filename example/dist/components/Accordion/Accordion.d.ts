import React from 'react';
import './Accordion.scss';
import { Direction, StandardFunctionProps } from '../../Types';
export interface AccordionProps extends StandardFunctionProps {
    /** Determines whether the expand Icon is at the left, right or doesn't exist. If there is no accordionBody, no icons are shown*/
    iconPlacement?: Direction;
    /** Determines whether the accordion is expanded by default or not */
    expanded?: boolean;
    /** Prevents any interaction with this element, including the onClick function */
    disabled?: boolean;
    /** Function to be called when the accordion is expanded or collapsed */
    onChange?: () => void;
}
export declare const AccordionContext: React.Context<{
    isExpanded: boolean;
    setExpanded: (param: boolean) => void;
    iconPlacementPosition: Direction;
    isDisabled: boolean;
    onChange: () => void;
    hasBody: boolean;
} | undefined>;
export declare const useAccordionContext: () => {
    isExpanded: boolean;
    setExpanded: (param: boolean) => void;
    iconPlacementPosition: Direction;
    isDisabled: boolean;
    onChange: () => void;
    hasBody: boolean;
};
export type AccordionRef = HTMLDivElement;
export declare const AccordionRoot: React.ForwardRefExoticComponent<AccordionProps & React.RefAttributes<HTMLDivElement>>;
