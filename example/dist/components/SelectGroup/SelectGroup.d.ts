import React from 'react';
import { ComponentColor, ComponentSize, ButtonShape, StandardFunctionProps } from '../../Types';
import './SelectGroup.scss';
export interface SelectGroupProps extends StandardFunctionProps {
    /** SelectGroup color */
    color?: ComponentColor;
    /** SelectGroup size */
    size?: ComponentSize;
    /** Shape... */
    shape?: ButtonShape;
}
export type SelectGroupRef = HTMLDivElement;
export declare const SelectGroupRoot: React.ForwardRefExoticComponent<SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
