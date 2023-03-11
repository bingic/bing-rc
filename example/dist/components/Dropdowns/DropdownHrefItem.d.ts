import React from 'react';
import { DropdownItemType, StandardFunctionProps } from '../../Types';
export interface DropdownHrefItemProps extends StandardFunctionProps {
    /** Value to be returned via the onClick function */
    value?: any;
    /** Whether or not the item should have selected styling */
    selected?: boolean;
    /** Controls which style of dropdown item is rendered */
    type?: DropdownItemType;
    /** Controls whether the text contents of this item wrap or not */
    wrapText?: boolean;
    /** Title attribute */
    title?: string;
    /** Whether or not the item should have selected styling */
    href: string | undefined;
    /** Prevents any interaction with this element, including the onClick function */
    disabled?: boolean;
}
export type DropdownHrefItemRef = HTMLButtonElement;
export declare const DropdownHrefItem: React.ForwardRefExoticComponent<DropdownHrefItemProps & React.RefAttributes<HTMLButtonElement>>;
