import React from 'react';
import { DropdownItemType, StandardFunctionProps } from '../../Types';
export interface DropdownItemProps extends StandardFunctionProps {
    /** Value to be returned via the onClick function */
    value?: any;
    /** Whether or not the item should have selected styling */
    selected?: boolean;
    /** Controls which style of dropdown item is rendered */
    type?: DropdownItemType;
    /** When a dropdown item is clicked, its `value` prop is returned via `onChange` */
    onClick?: (value?: any) => void;
    /** Controls whether the text contents of this item wrap or not */
    wrapText?: boolean;
    /** Title attribute */
    title?: string;
    /** Prevents any interaction with this element, including the onClick function */
    disabled?: boolean;
    trailingIconOnSelected?: boolean;
}
export type DropdownItemRef = HTMLButtonElement;
export declare const DropdownItem: React.ForwardRefExoticComponent<DropdownItemProps & React.RefAttributes<HTMLButtonElement>>;
