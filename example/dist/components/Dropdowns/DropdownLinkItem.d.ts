import React from 'react';
import { DropdownItemType, StandardFunctionProps } from '../../Types';
export interface DropdownLinkItemProps extends StandardFunctionProps {
    /** Whether or not the item should have selected styling */
    selected: boolean;
    /** Controls which style of dropdown item is rendered */
    type?: DropdownItemType;
    /** Controls whether the text contents of this item wrap or not */
    wrapText?: boolean;
    /** Renders the element in a disabled state, does not affect functionality */
    disabled?: boolean;
}
export type DropdownLinkItemRef = HTMLDivElement;
export declare const DropdownLinkItem: React.ForwardRefExoticComponent<DropdownLinkItemProps & React.RefAttributes<HTMLDivElement>>;
