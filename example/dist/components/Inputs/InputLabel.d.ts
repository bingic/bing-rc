import React from 'react';
import { ComponentSize, StandardFunctionProps } from '../../Types';
import './InputLabel.scss';
export interface InputLabelProps extends StandardFunctionProps {
    /** Used to match the state of the associated SlideToggle */
    active?: boolean;
    /** Button size */
    size?: ComponentSize;
    /** Controls text wrapping */
    wrapText?: boolean;
    /** Associate this label with a specific input */
    htmlFor?: string;
    /** Keyboard control tab order  */
    tabIndex?: number;
}
export type InputLabelRef = HTMLLabelElement;
export declare const InputLabel: React.ForwardRefExoticComponent<InputLabelProps & React.RefAttributes<HTMLLabelElement>>;
