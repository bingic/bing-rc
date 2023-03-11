import React from 'react';
import './ButtonGroup.scss';
import { StandardFunctionProps, Orientation } from '../../../Types';
export interface ButtonGroupProps extends StandardFunctionProps {
    /** Stacking axis of buttons */
    orientation?: Orientation;
}
export type ButtonGroupRef = HTMLDivElement;
export declare const ButtonGroup: React.ForwardRefExoticComponent<ButtonGroupProps & React.RefAttributes<HTMLDivElement>>;
