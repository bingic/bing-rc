import React from 'react';
import { ComponentStatus, Color, StandardFunctionProps, ValidationFunction } from '../../Types';
import './ColorPicker.scss';
interface ColorPickerProps extends StandardFunctionProps {
    /** currently selected color */
    color: string;
    /** Function to be called on color select */
    onChange: (color: string, status?: ComponentStatus) => void;
    /** Array of colors to be displayed in color picker */
    colors?: Color[];
    /** Prevent focus from leaving the input */
    maintainInputFocus?: boolean;
    /** How many color swatches to render in each row */
    swatchesPerRow?: number;
    /** Enforces hexcode format by defult, pass in your own function to customize */
    validationFunc?: ValidationFunction;
    /** Characters matching this expression will be stripped out of the value before being passed into onChange */
    invalidChars?: RegExp;
}
export type ColorPickerRef = HTMLDivElement;
export declare const ColorPicker: React.ForwardRefExoticComponent<ColorPickerProps & React.RefAttributes<HTMLDivElement>>;
export {};
