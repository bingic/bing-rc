import React from 'react';
import { StandardFunctionProps, Omit, RenderLinkElement } from '../../Types';
export interface TreeNavItemProps extends Omit<StandardFunctionProps, 'id'> {
    /** Unique identifier for nav item */
    id: string;
    /** Icon or Image to appear in the square */
    icon: JSX.Element;
    /** Label to appear to the right of the icon, only visible when expanded */
    label: string;
    /** Optional label displayed when the TreeNav is collapsed */
    shortLabel?: string;
    /** Click behavior */
    onClick?: (id: string) => void;
    /** Controls state of item */
    active?: boolean;
    /** Optional link element. Will override onClick prop */
    linkElement?: RenderLinkElement;
}
export type TreeNavItemRef = HTMLButtonElement;
export declare const TreeNavItem: React.ForwardRefExoticComponent<TreeNavItemProps & React.RefAttributes<HTMLButtonElement>>;
