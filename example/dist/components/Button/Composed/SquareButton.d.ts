import React from 'react';
import { ButtonBaseRef } from '../Base/ButtonBase';
import { Omit, IconFont } from '../../../Types';
import { ButtonBaseProps } from '../Base/ButtonBase';
export interface SquareButtonProps extends Omit<ButtonBaseProps, 'Shape'> {
    /** Icon to be displayed to the left of text or in place of text */
    icon: IconFont;
}
export type SquareButtonRef = ButtonBaseRef;
export declare const SquareButton: React.ForwardRefExoticComponent<SquareButtonProps & React.RefAttributes<HTMLButtonElement>>;
