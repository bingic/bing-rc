import React, { MouseEvent } from 'react';
import { StandardFunctionProps, Typeface, HeadingElement, FontWeight } from '../../Types';
import './Heading.scss';
export interface HeadingProps extends StandardFunctionProps {
    weight?: FontWeight;
    /** Use monospace font instead of default */
    type?: Typeface;
    /** Controls appearance of border below heading */
    underline?: boolean;
    /** Element to use for heading */
    element: HeadingElement;
    /** Visual only - will match the element prop if not specified */
    appearance?: HeadingElement;
    /** Controls whether the text can be selected */
    selectable?: boolean;
    /** Function to be called on button click */
    onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
    /** Alternate text */
    alt?: string;
}
export type HeadingRef = HTMLHeadingElement;
export declare const Heading: React.ForwardRefExoticComponent<HeadingProps & React.RefAttributes<HTMLHeadingElement>>;
