import React, { MouseEvent } from 'react';
import '../Button.scss';
import { ComponentStatus, ComponentColor, ComponentSize, ButtonShape, ButtonType, StandardFunctionProps } from '../../../Types';
export interface ButtonBaseProps extends StandardFunctionProps {
    /** Function to be called on button click */
    onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
    /** Function to be called on mouse over */
    onMouseOver?: (e?: MouseEvent<HTMLButtonElement>) => void;
    /** Function to be called on mouse out */
    onMouseOut?: (e?: MouseEvent<HTMLButtonElement>) => void;
    /** Function to be called on mouse enter */
    onMouseEnter?: (e?: MouseEvent<HTMLButtonElement>) => void;
    /** Function to be called on mouse leave */
    onMouseLeave?: (e?: MouseEvent<HTMLButtonElement>) => void;
    /** Text to be displayed on hover tooltip */
    titleText?: string;
    /** Text to be displayed on hover tooltip when the button is disabled */
    disabledTitleText?: string;
    /** Keyboard control tab order  */
    tabIndex?: number;
    /** Button color */
    color?: ComponentColor;
    /** Button size */
    size?: ComponentSize;
    /** Square or rectangle */
    shape?: ButtonShape;
    /** Button status state default, loading, or disabled */
    status?: ComponentStatus;
    /** Toggles button highlighted active state */
    active?: boolean;
    /** Button type of 'button' or 'submit' */
    type?: ButtonType;
}
export type ButtonBaseRef = HTMLButtonElement;
export declare const ButtonBase: React.ForwardRefExoticComponent<ButtonBaseProps & React.RefAttributes<HTMLButtonElement>>;
