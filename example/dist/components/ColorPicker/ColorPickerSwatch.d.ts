import React from 'react';
import { StandardFunctionProps } from '../../Types';
interface ColorPickerSwatchProps extends StandardFunctionProps {
    /** Color name */
    name: string;
    /** Color hex value */
    hex: string;
    /** Function to be called on color click */
    onClick: (hex: string) => void;
    /** Used to determine percentage width of parent to take up */
    swatchesPerRow: number;
    /** Index - used to determine if corners are rounded or not */
    index: number;
    /** Number of colors used in Color Picker, used to determine rounded corners */
    swatchesCount: number;
}
export type ColorPickerSwatchRef = HTMLDivElement;
export declare const ColorPickerSwatch: React.ForwardRefExoticComponent<ColorPickerSwatchProps & React.RefAttributes<HTMLDivElement>>;
export {};
