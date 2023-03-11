import React from 'react';
import { ButtonBaseRef } from '../Base/ButtonBase';
import '../Button.scss';
import { IconFont } from '../../../Types';
import { ButtonBaseProps } from '../Base/ButtonBase';
export interface ButtonProps extends ButtonBaseProps {
    /** Text to be displayed on button */
    text?: string;
    /** Icon to be displayed to the left of text or in place of text */
    icon?: IconFont;
    /** Reverse ordering of text and icon */
    placeIconAfterText?: boolean;
}
export type ButtonRef = ButtonBaseRef;
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
