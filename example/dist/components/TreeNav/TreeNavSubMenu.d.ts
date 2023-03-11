import React from 'react';
import { PopoverPosition, StandardFunctionProps } from '../../Types';
export interface OptionalProp {
    position?: PopoverPosition;
}
export type TreeNavSubMenuProps = StandardFunctionProps & OptionalProp;
export type TreeNavSubMenuRef = HTMLDivElement;
export declare const TreeNavSubMenu: React.ForwardRefExoticComponent<StandardFunctionProps & OptionalProp & React.RefAttributes<HTMLDivElement>>;
