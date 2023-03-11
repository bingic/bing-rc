import React, { MouseEvent } from 'react';
import { StandardFunctionProps } from '../../Types';
import './Dropdown.scss';
export declare enum MenuStatus {
    Open = "open",
    Closed = "closed"
}
export interface DropdownProps extends StandardFunctionProps {
    /** Component to render as the button (use Dropdown.Button) */
    button: (active: boolean, onClick: (e: MouseEvent<HTMLElement>) => void) => JSX.Element;
    /** Component to render as the menu (use Dropdown.Menu) */
    menu: (onCollapse?: () => void) => JSX.Element;
    /** Renders the menu element above the button instead of below */
    dropUp?: boolean;
    /** Disable Dropdown's out of the box focus behavior if you have a custom behavior */
    disableAutoFocus?: boolean;
    /** Optional method that is triggered when the user clicks outside of/away from the dropdown */
    onClickAway?: () => void;
    /**
     * optional way for the owner of this dropdown to set the menu to be open or closed:
     * 'open':  the menu will be open
     * 'closed': the menu will be closed
     * any other string will be ignored.
     *
     * and the menu  (open/closed) only changes programmatically when this value changes.
     * so the owner is responsible for resetting this value
     * (if the string is set to 'open', and then the user closes it, and the code sets it to open again,
     * unless the code sets it to something else in between (like null or 'close'),
     * then nothing will happen- the menu will not open)
     * */
    menuOpen?: MenuStatus;
}
export type DropdownRef = HTMLDivElement;
export declare const DropdownRoot: React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLDivElement>>;
