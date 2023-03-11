import React from 'react';
import { StandardFunctionProps } from '../../Types';
export interface DropdownItemEmptyProps extends StandardFunctionProps {
    /** Controls whether the text contents of this item wrap or not */
    wrapText?: boolean;
}
export type DropdownItemEmptyRef = HTMLDivElement;
export declare const DropdownItemEmpty: React.ForwardRefExoticComponent<DropdownItemEmptyProps & React.RefAttributes<HTMLDivElement>>;
