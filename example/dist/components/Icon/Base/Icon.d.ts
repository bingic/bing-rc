import React from 'react';
import { IconFont, StandardFunctionProps } from '../../../Types';
export interface IconProps extends StandardFunctionProps {
    /** Icon to display */
    glyph: IconFont | string;
}
export type IconRef = HTMLSpanElement;
export declare const Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<HTMLSpanElement>>;
