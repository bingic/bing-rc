import React from 'react';
import { DropdownRef } from '../';
import { ComponentColor, ComponentSize, IconFont, DropdownMenuTheme, DropdownItemType, ComponentStatus, StandardFunctionProps } from '../../../Types';
export interface SelectDropdownProps extends StandardFunctionProps {
    /** Text to render in button as currently selected option */
    selectedOption: string;
    /** List of options to render in menu */
    options: string[];
    /** Fires when an option is clicked, used to update state */
    onSelect: (option: string) => void;
    /** Optional status of button */
    buttonStatus?: ComponentStatus;
    /** Optional color of button */
    buttonColor?: ComponentColor;
    /** Optional size of button */
    buttonSize?: ComponentSize;
    /** Optional icon to render in button */
    buttonIcon?: IconFont;
    /** Optional choice of item indicator */
    indicator?: DropdownItemType;
    /** Optional theme of menu */
    menuTheme?: DropdownMenuTheme;
    /** Optional maximum pixel height menu */
    menuMaxHeight?: number;
    /** Renders the menu element above the button instead of below */
    dropUp?: boolean;
}
export type SelectDropdownRef = DropdownRef;
export declare const SelectDropdown: React.ForwardRefExoticComponent<SelectDropdownProps & React.RefAttributes<HTMLDivElement>>;
