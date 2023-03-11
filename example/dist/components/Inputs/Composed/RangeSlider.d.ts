import React, { ChangeEvent } from 'react';
import './RangeSlider.scss';
import { StandardFunctionProps, ComponentColor, ComponentSize, AutoComplete, ComponentStatus, ComponentOrientation } from '../../../Types';
export interface RangeSliderProps extends StandardFunctionProps {
    /** Minimum value */
    min: number;
    /** Maximum value */
    max: number;
    /** Stepping interval granularity for range type */
    step?: number;
    /** Input field value to be updated with 'on X' functions */
    value: number;
    /** Function to be called on field value change */
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    /** Allows or disallows browser autocomplete functionality */
    autocomplete?: AutoComplete;
    /** Input status state */
    status?: ComponentStatus;
    /** Size of handle and track  */
    size?: ComponentSize;
    /** Color of slider handle */
    color?: ComponentColor;
    /** Fill the track before the handle to indicate percentage */
    fill?: boolean;
    /** Displays the min and max values below the slider */
    hideLabels?: boolean;
    /** Adds a prefix to labels */
    labelPrefix?: string;
    /** Adds a suffix to labels */
    labelSuffix?: string;
    /** Determines orientation of range slider */
    orientation?: ComponentOrientation;
    /** Determines whether to display value  */
    displayValue?: boolean;
}
export type RangeSliderRef = HTMLInputElement;
export declare const RangeSlider: React.ForwardRefExoticComponent<RangeSliderProps & React.RefAttributes<HTMLInputElement>>;
