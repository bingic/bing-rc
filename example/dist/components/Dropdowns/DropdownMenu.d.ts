import React, { RefObject, CSSProperties } from 'react';
import { DropdownMenuTheme, StandardFunctionProps } from '../../Types';
export interface DropdownMenuProps extends StandardFunctionProps {
    /** Pixel height after which the dropdown menu will scroll */
    maxHeight?: number;
    /** Controls coloration of the dropdown menu and all subcomponents */
    theme?: DropdownMenuTheme;
    /** Disable scrolling horizontally */
    noScrollX?: boolean;
    /** Disable scrolling vertically */
    noScrollY?: boolean;
    /** Automatically scroll to selected item when dropdown is opened */
    scrollToSelected?: boolean;
    /** Function to handle closing the menu when a child item is clicked */
    onCollapse?: () => void;
    /** Pass through ref for contents element within scrollbars */
    contentsRef?: RefObject<DropdownMenuContentsRef>;
    /** Useful for customizing appearance of the contents element within scrollbars */
    contentsStyle?: CSSProperties;
    /** Controls autoHide behavior of scrollbars within the menu */
    autoHideScrollbars?: boolean;
}
export type DropdownMenuRef = HTMLDivElement;
export type DropdownMenuContentsRef = HTMLDivElement;
export declare const DropdownMenu: React.ForwardRefExoticComponent<DropdownMenuProps & React.RefAttributes<HTMLDivElement>>;
