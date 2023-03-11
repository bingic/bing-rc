import React from 'react';
import { Gradients, InfluxColors, StandardFunctionProps, ComponentSize } from '../../Types';
import './ProgressBar.scss';
export interface ProgressBarProps extends StandardFunctionProps {
    /** Controls the gradient color of the bar */
    barGradient?: Gradients;
    /** Controls the text color and bar if no gradient is provided */
    color?: InfluxColors | string;
    /** The current amount */
    value?: number;
    /** The total amount */
    max?: number;
    /** Controls the size of the bar & text */
    size?: ComponentSize;
    /** Descriptive text for what is being valueed */
    label?: string;
    /** Optional Text for value */
    valueText?: string;
    /** Optional Text for max */
    maxText?: string;
}
export type ProgressBarRef = HTMLDivElement;
export declare const ProgressBar: React.ForwardRefExoticComponent<ProgressBarProps & React.RefAttributes<HTMLDivElement>>;
