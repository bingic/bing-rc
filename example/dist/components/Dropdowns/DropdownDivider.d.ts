import React from 'react';
import { StandardFunctionProps } from '../../Types';
export interface DropdownDividerProps extends StandardFunctionProps {
    /** Text to be displayed on divider, a line will be displayed if no text is provided */
    text?: string;
}
export type DropdownDividerRef = HTMLDivElement;
export declare const DropdownDivider: React.ForwardRefExoticComponent<DropdownDividerProps & React.RefAttributes<HTMLDivElement>>;
