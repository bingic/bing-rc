import React from 'react';
import { DropdownRef } from '../';
import { ComponentSize, ComponentStatus, DropdownMenuTheme, IconFont, StandardFunctionProps } from '../../../Types';
export interface CreatableTypeAheadDropdownProps extends StandardFunctionProps {
    /** Text to render in input field as currently selected or typed option */
    selectedOption: string;
    /** List of options to render in dropdown menu */
    options: string[];
    onSelect: (option: string) => void;
    placeholder?: string;
    inputStatus?: ComponentStatus;
    inputSize?: ComponentSize;
    /** Optional icon to be displayed to the left of text in input  */
    inputIcon?: IconFont;
    /** Optional color preview to be displayed to the left of text.
     * The color is determined by the selected or typed option in #000000 format.
     * If both icon and this props are set, icon will take priority */
    inputColorPreviewOn?: boolean;
    menuTheme?: DropdownMenuTheme;
    menuMaxHeight?: number;
    /** Customize the layout of dropdown items */
    customizedDropdownItem?: (displayText: string) => JSX.Element;
}
export type CreatableTypeAheadDropdownReadmeRef = DropdownRef;
export declare const CreatableTypeAheadDropdown: React.ForwardRefExoticComponent<CreatableTypeAheadDropdownProps & React.RefAttributes<HTMLDivElement>>;
