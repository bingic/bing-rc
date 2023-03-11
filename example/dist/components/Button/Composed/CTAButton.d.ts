import React from 'react';
import { ButtonBaseRef, ButtonBaseProps } from '../Base/ButtonBase';
import './CTAButton.scss';
import { Omit, IconFont } from '../../../Types';
export interface CTAButtonProps extends Omit<ButtonBaseProps, 'size'> {
    /** Text to be displayed on button */
    text?: string;
    /** Icon to be displayed to the left of text or in place of text */
    icon?: IconFont;
    /** Reverse ordering of text and icon */
    placeIconAfterText?: boolean;
}
export type CTAButtonRef = ButtonBaseRef;
export declare const CTAButton: React.ForwardRefExoticComponent<CTAButtonProps & React.RefAttributes<HTMLButtonElement>>;
