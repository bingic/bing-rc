import React, { RefObject } from 'react';
import { ComponentColor, StandardFunctionProps, Coordinates } from '../../../Types';
export interface RightClickMenuProps extends StandardFunctionProps {
    /** Bounding rectangle of trigger element */
    triggerRef: RefObject<any>;
    /** Menu dialog color */
    color: ComponentColor;
    /** Dismisses the menu */
    onHide: () => void;
    /** Mouse position from right click event */
    mouseOffset: Coordinates;
}
export type RightClickMenuRef = HTMLUListElement;
export declare const RightClickMenu: React.ForwardRefExoticComponent<RightClickMenuProps & React.RefAttributes<HTMLUListElement>>;
