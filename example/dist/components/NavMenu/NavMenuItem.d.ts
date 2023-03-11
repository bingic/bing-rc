import React from 'react';
import { StandardFunctionProps, RenderLinkElement } from '../../Types';
export interface NavMenuItemProps extends StandardFunctionProps {
    /** Render prop for linked title text */
    titleLink: RenderLinkElement;
    /** Render prop for linked icon component */
    iconLink: RenderLinkElement;
    /** Controls highlighting of the menu item */
    active: boolean;
}
export type NavMenuItemRef = HTMLDivElement;
export declare const NavMenuItem: React.ForwardRefExoticComponent<NavMenuItemProps & React.RefAttributes<HTMLDivElement>>;
