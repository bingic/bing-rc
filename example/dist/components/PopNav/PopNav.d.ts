import React from 'react';
import { ComponentSize, ComponentColor, StandardFunctionProps, Alignment } from '../../Types';
import './PopNav.scss';
export interface PopNavProps extends StandardFunctionProps {
    /** Height of bar and it's elements */
    size?: ComponentSize;
    /** Sets the alignment of the menu to the button */
    align?: Alignment;
    /** Controls initial visibility of the menu */
    visible?: boolean;
    /** Controls the color of the trigger button */
    buttonColor?: ComponentColor;
}
export type PopNavRef = HTMLDivElement;
export declare const PopNavRoot: React.ForwardRefExoticComponent<PopNavProps & React.RefAttributes<HTMLDivElement>>;
