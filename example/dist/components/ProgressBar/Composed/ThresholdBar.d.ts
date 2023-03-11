import React from 'react';
import { Gradients, InfluxColors, Omit, ComponentSize } from '../../../Types';
import { ProgressBarProps } from '../ProgressBar';
export type threshold = {
    floor: number;
    color?: InfluxColors | string;
    gradient?: Gradients;
};
export interface ThresholdBarProps extends Omit<ProgressBarProps, 'barGradient' | 'color'> {
    /** The current amount */
    value?: number;
    /** The total amount */
    max?: number;
    /** Controls the size of the bar & text */
    size?: ComponentSize;
    /** Descriptive text for what is being valueed */
    label?: string;
    /** An array of thresholds and colors to be used at each */
    thresholds?: threshold[];
}
export type ThresholdBarRef = HTMLDivElement;
export declare const ThresholdBar: React.ForwardRefExoticComponent<ThresholdBarProps & React.RefAttributes<HTMLDivElement>>;
