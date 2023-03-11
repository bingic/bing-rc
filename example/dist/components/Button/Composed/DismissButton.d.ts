import React from 'react';
import { ButtonBaseRef } from '../Base/ButtonBase';
import './DismissButton.scss';
import { ButtonBaseProps } from '../Base/ButtonBase';
export interface DismissButtonProps extends ButtonBaseProps {
}
export type DismissButtonRef = ButtonBaseRef;
export declare const DismissButton: React.ForwardRefExoticComponent<DismissButtonProps & React.RefAttributes<HTMLButtonElement>>;
