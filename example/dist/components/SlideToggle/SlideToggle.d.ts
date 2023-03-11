import React from 'react';
import './SlideToggle.scss';
import { ComponentColor, ComponentSize, StandardFunctionProps } from '../../Types';
export interface SlideToggleProps extends StandardFunctionProps {
    /** Function to be called on slide toggle state change */
    onChange: () => void;
    /** Toggles slide toggle active state */
    active: boolean;
    /** Button size */
    size?: ComponentSize;
    /** Slide toggle color */
    color?: ComponentColor;
    /** Toggles disabled state */
    disabled?: boolean;
    /** Text to be displayed on hover tooltip */
    tooltipText?: string;
}
export type SlideToggleRef = HTMLButtonElement;
export declare const SlideToggleRoot: React.ForwardRefExoticComponent<SlideToggleProps & React.RefAttributes<HTMLButtonElement>>;
