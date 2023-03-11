import React, { MouseEvent } from 'react';
import { ButtonBaseRef } from '../Button/Base/ButtonBase';
import { ComponentColor, ComponentSize, ComponentStatus, IconFont, StandardFunctionProps } from '../../Types';
import './DropdownButton.scss';
export interface DropdownButtonProps extends StandardFunctionProps {
    /** Function to be called on click of dropdown button */
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    /** Button status state default, loading, or disabled */
    status?: ComponentStatus;
    /** Button color */
    color?: ComponentColor;
    /** Button size */
    size?: ComponentSize;
    /** Toggles button highlighted active state */
    active?: boolean;
    /** Icon to be displayed to the left of text or in place of text */
    icon?: IconFont;
    /** Icon to be displayed to the right of text */
    trailingIcon?: IconFont;
    /** Text to be displayed on hover tooltip */
    title?: string;
    disabledTitleText?: string;
}
export type DropdownButtonRef = ButtonBaseRef;
export declare const DropdownButton: React.ForwardRefExoticComponent<DropdownButtonProps & React.RefAttributes<HTMLButtonElement>>;
