import React from 'react';
import { StandardFunctionProps, ComponentSize, InfluxColors } from '../../Types';
import './Label.scss';
export interface LabelProps extends StandardFunctionProps {
    /** Unique value to be returned when Label is clicked */
    id: string;
    /** Name of the Label, appears inside the label */
    name: string;
    /** Description of Label, appears on hover */
    description: string;
    /** Used to colorize the label, can be hexcode or rgba */
    color: InfluxColors | string;
    /** Optional click handler */
    onClick?: (id: string) => void;
    /** Optional delete handler, if passed in the delete button is rendered */
    onDelete?: (id: string) => void;
    /** Size of Label */
    size?: ComponentSize;
}
export type LabelRef = HTMLDivElement;
export declare const Label: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLDivElement>>;
